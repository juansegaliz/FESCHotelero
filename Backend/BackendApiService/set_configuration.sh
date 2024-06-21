#!/bin/bash

# Ruta del archivo JSON que quieres modificar
JSON_FILE=/app/Configuration/appsettings.json

# Imprimir las variables de entorno para depuración
echo "ConnectionString: $ConnectionString"
echo "Origins: $Origins"

# Convertir la variable de entorno Origins a un array JSON
IFS=',' read -r -a origins_array <<< "$Origins"
echo "origins_array: ${origins_array[@]}"  # Imprimir el array para depuración

origins_json=$(printf '%s\n' "${origins_array[@]}" | jq -R . | jq -s .)
echo "origins_json: $origins_json"  # Imprimir el JSON para depuración

# Verificar si jq está instalado
if ! command -v jq &> /dev/null
then
    echo "jq could not be found"
    exit 1
fi

# Reemplaza los valores en el archivo JSON usando jq
jq --arg connString "$ConnectionString" --argjson origins "$origins_json" \
   '.MySQLSettings.ConnectionString = $connString | .CORSSettings.Origins = $origins' \
   "$JSON_FILE" > "${JSON_FILE}.tmp" && mv "${JSON_FILE}.tmp" "$JSON_FILE"

# Verificar si el comando jq tuvo éxito
if [ $? -ne 0 ]; then
    echo "jq command failed"
    exit 1
fi

# Imprimir el archivo JSON resultante para verificación
cat "$JSON_FILE"

# Ejecuta la aplicación
exec dotnet BackendApiService.dll

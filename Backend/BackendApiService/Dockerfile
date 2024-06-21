# See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

# Variables
ARG ConnectionString="server=localhost;database=fesc_hotelero;user=root;password=Root-Password-1234-$;"
ARG Origins="http://localhost:4200,http://localhost:4000"
ENV ConnectionString=${ConnectionString}
ENV Origins=${Origins}

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["BackendApiService/BackendApiService.csproj", "BackendApiService/"]
COPY ["Application/Application.csproj", "Application/"]
COPY ["Domain/Domain.csproj", "Domain/"]
COPY ["Infrastructure/Infrastructure.csproj", "Infrastructure/"]
RUN dotnet restore "BackendApiService/BackendApiService.csproj"
COPY . .
WORKDIR "/src/BackendApiService"
RUN dotnet build "BackendApiService.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "BackendApiService.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Instalar jq y bash para el procesamiento JSON
RUN apt-get update && apt-get install -y jq bash

COPY set_configuration.sh /app/set_configuration.sh
COPY Infrastructure/Configuration/appsettings.json /app/Configuration/appsettings.json
RUN chmod +x /app/set_configuration.sh

ENTRYPOINT ["/bin/bash", "/app/set_configuration.sh"]


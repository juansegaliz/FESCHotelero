export function setToLocalStorage(key: string, value: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // console.error('Error al guardar datos en el localStorage:', error);
  }
}

export function getFromLocalStorage(key: string) {
  try {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return item;
  } catch (error) {
    // console.error('Error al recuperar datos del localStorage:', error);
    return null;
  }
}

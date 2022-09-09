export default async function fetchPhotos(cant) {
  const api = `https://tinyfac.es/api/data?limit=${cant}&quality=${cant}`;
  const response = await fetch(api);
  return response;
}

async function getNewImage() {
  const res = await fetch('https://tinyfac.es/api/data?limit=1&quality=0');
  if (!res.ok) {
    throw new Error('Error on get images');
  }

  return await res.json();
}

async function updatePhotos(amount) {
  const pictures = await getNewImage();
}

export { getNewImage, updatePhotos };

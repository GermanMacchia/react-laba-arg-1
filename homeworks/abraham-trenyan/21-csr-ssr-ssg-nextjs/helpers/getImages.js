const getImages = async (imgAmount) => {
    const response = await fetch(`https://tinyfac.es/api/data?limit=${imgAmount}&quality=0`);
    const jsonResponse = await response.json();
    return jsonResponse;
  };
export default getImages;
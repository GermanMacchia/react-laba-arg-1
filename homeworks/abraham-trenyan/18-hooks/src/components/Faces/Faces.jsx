import './Faces.css';
import { useState } from 'react';
import RefreshIcon from '../RefreshIcon/RefreshIcon';
const Faces = () => {
  const [images, setImages] = useState([]);
  const addImg = async () => {
    let response = await fetch(`https://tinyfac.es/api/data?limit=1&quality=0`);
    response.json().then((result) => {
      setImages([...images, result[0].url]);
    });
  };
  const refreshAll = async () => {
    let response = await fetch(`https://tinyfac.es/api/data?limit=${images.length}&quality=0`);
    let result = await response.json()
      let newImgs = [];
      for (let i = 0; i < result.length; i++) {
        newImgs.push(result[i].url);
      }
      setImages([...newImgs]);
  };
  const refreshImg = async (e) => {
    let response = await fetch(`https://tinyfac.es/api/data?limit=1&quality=0`);
    response.json().then((result) => {
      let newState = [...images];
      newState[e.target.parentElement.id] = result[0].url;
      setImages([...newState]);
    });
  };
  return (
    <main>
      <section className="faces__container">
        {images.map((url, index) => (
          <div className="face" id={index} key={index} onClick={(e) => refreshImg(e)}>
            <div className="face__img face__img--layer">
              <RefreshIcon />
            </div>
            <img className="face__img" src={url} loading="lazy" alt="random person"></img>
          </div>
        ))}
        <div className="add" onClick={addImg}>
          <div className="add__horizontal-line"></div>
          <div className="add__vertical-line"></div>
        </div>
      </section>
      <footer className="refresh-all">
        {images.length > 1 && (
          <button className="refresh-all__button" onClick={refreshAll}>
            Refresh All
          </button>
        )}
      </footer>
    </main>
  );
};

export default Faces;

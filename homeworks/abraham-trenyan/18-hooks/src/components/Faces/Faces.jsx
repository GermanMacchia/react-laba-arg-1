import './Faces.css';
import { useState } from 'react';
import RefreshIcon from '../RefreshIcon/RefreshIcon';
const Faces = () => {
  const [images, setImages] = useState([]);
  const getImg = (e, imgAmount) => {
    fetch(`https://tinyfac.es/api/data?limit=${imgAmount}&quality=0`)
      .then((res) => res.json())
      .then((result) => {
        if (e.target.className.includes('add')) {
          // If we just need to add one photo, we take the first object from the results array and push its url after the previous URLs that we have
          setImages([...images, result[0].url]);
        } else if (e.target.className === 'refresh-all__button') {
          // In case the request was triggered by the refresh all button,we must replace the old state with an array of new urls(newImgs)
          let newImgs = [];
          for (let i = 0; i < result.length; i++) {
            newImgs.push(result[i].url);
          }
          setImages(newImgs);
        } else if (e.target.className.includes('face')) {
          // If a face triggered the event, we replace that face
          let newState = [...images];
          newState[e.target.parentElement.id] = result[0].url;
          setImages([...newState]);
        }
      });
  };
  return (
    <main>
      <section className="faces__container">
        {images.map((url, index) => (
          <div className="face" id={index} key={index} onClick={(e) => getImg(e, 1)}>
            <div className="face__img face__img--layer">
              <RefreshIcon/>
            </div>
            <img className="face__img" src={url} loading="lazy" alt="random person"></img>
          </div>
        ))}
        <div className="add" onClick={(e) => getImg(e, 1)}>
          <div className="add__horizontal-line"></div>
          <div className="add__vertical-line"></div>
        </div>
      </section>
      <footer className="refresh-all">
        {images.length > 1 && (
          <button className="refresh-all__button" onClick={(e) => getImg(e, images.length)}>
            Refresh All
          </button>
        )}
      </footer>
    </main>
  );
};

export default Faces;

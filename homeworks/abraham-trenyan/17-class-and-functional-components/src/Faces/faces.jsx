import React, { Component } from 'react';
import './faces.css';
class Faces extends Component {
  constructor() {
    super();
    this.state = { images: [] };
  }
  requestImg(e, imgAmount) {
    fetch(`https://tinyfac.es/api/data?limit=${imgAmount}&quality=0`)
      .then((res) => res.json())
      .then((result) => {
        this.setState((prevState) => {
          if (e.target.className.includes('add')) {
            return {
              // If we just need to add one photo, we take the first object from the results array and push its url after the previous URLs that we have
              images: [...prevState.images, result[0].url],
            };
          } else if (e.target.className === 'refresh-all__button') {
            // In case the request was triggered by the refresh all button,we must replace the old state with an array of new urls(newImgs)
            let newImgs = [];
            for (let i = 0; i < result.length; i++) {
              newImgs.push(result[i].url);
            }
            return {
              images: [...newImgs],
            };
          } else if (e.target.className.includes('face')) {
            // If a face triggered the event, we replace that face
            let newState = [...prevState.images];
            newState[e.target.parentElement.id] = result[0].url;
            return {
              images: [...newState],
            };
          }
        });
      });
  }
  render() {
    return (
      <main>
        <section className="faces__container">
          {this.state.images.map((url, index) => (
            <div className="face" id={index} key={index} onClick={(e) => this.requestImg(e, 1)}>
              <div className="face__img face__img-layer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="87"
                  height="87"
                  fill="currentColor"
                  className="bi bi-arrow-repeat"
                  id="svg-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                  <path
                    fillRule="evenodd"
                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                  />
                </svg>
              </div>
              <img className="face__img" src={url} loading="lazy" alt="random person"></img>
            </div>
          ))}
          <div className="add" onClick={(e) => this.requestImg(e, 1)}>
            <div className="add__horizontal-line"></div>
            <div className="add__vertical-line"></div>
          </div>
        </section>
        <section className="refresh-all">
          {this.state.images.length > 1 ? (
            <button className="refresh-all__button" onClick={(e) => this.requestImg(e, this.state.images.length)}>
              Refresh All
            </button>
          ) : (
            <></>
          )}
        </section>
      </main>
    );
  }
}

export default Faces;

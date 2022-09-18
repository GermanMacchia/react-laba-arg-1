import React, { Component } from 'react';
import RefreshIcon from '../RefreshIcon/RefreshIcon';
import './faces.css';
class Faces extends Component {
  constructor() {
    super();
    this.state = { images: [] };
  }
  async getImg(e, imgAmount) {
    let res = await fetch(`https://tinyfac.es/api/data?limit=${imgAmount}&quality=0`);
    res.json().then((result) => {
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
              <div className="face" id={index} key={index} onClick={(e) => this.getImg(e, 1)}>
                <div className="face__img face__img--layer">
                  <RefreshIcon />
                </div>
                <img className="face__img" src={url} loading="lazy" alt="random person"></img>
              </div>
            ))}
            <div className="add" onClick={(e) => this.getImg(e, 1)}>
              <div className="add__horizontal-line"></div>
              <div className="add__vertical-line"></div>
            </div>
          </section>
          <footer className="refresh-all">
            {this.state.images.length > 1 && (
              <button className="refresh-all__button" onClick={(e) => this.getImg(e, this.state.images.length)}>
                Refresh All
              </button>
            )}
          </footer>
      </main>
    );
  }
}

export default Faces;

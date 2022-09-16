import React, { useState } from 'react';
import '../styles.css';
import { AddButton } from './AddButton';
import { Img } from './Img';
import { RefreshAllBtn } from './RefreshAllBtn';

export const App = () => {
  const [people, setPeople] = useState([]);


  const fetchAvatar = async () => {
    const resp = await fetch('https://tinyfac.es/api/data?limit=1&quality=0');
    const data = await resp.json();
    return data[0];
  };

  const addAvatar = () => {
    fetchAvatar().then((person) => {
      setPeople([...people, { ...person }]);
    });
  };

  const refreshAvatar = (index) => {
    fetchAvatar().then((person) => {
      const refresh = [...people];
      refresh.splice(index, 1, person);
      setPeople([...refresh]);
    });
  };

  const refreshAll = async () => {
    const refreshAvatar = await Promise.all([...people].map(() => fetchAvatar()));
    setPeople(refreshAvatar);
  };

  return (
    <>
      <div className="container">
        <div style={{ display: '-webkit-box' }}>
          {people.map((person, index) => (
            <Img src={person.url} onClick={() => refreshAvatar(index)} />
          ))}
          <AddButton onClick={addAvatar} />
        </div>
        <div className="refreshContainer">{people.length ? <RefreshAllBtn onClick={refreshAll} /> : null}</div>
      </div>
    </>
  );
};

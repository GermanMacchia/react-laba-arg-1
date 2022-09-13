import React, { useState, useEffect } from 'react';
import '../styles.css';
import { AddButton } from './AddButton';
import { Img } from './Img';
import { RefreshAllBtn } from './RefreshAllBtn';

export const App = () => {
  const [avatar, setAvatar] = useState([]);

  useEffect(() => {
    fetchAvatar();
  }, []);

  const fetchAvatar = async () => {
    const resp = await fetch('https://tinyfac.es/api/data?limit=1&quality=0');
    const data = await resp.json();
    // console.log(data);
    return data[0];
  };

  const addAvatar = () => {
    fetchAvatar().then((person) => {
      setAvatar([...avatar, { ...person }]);
      console.log(person);
      console.log({ ...avatar });
    });
  };

  const refreshAvatar = (index) => {
    fetchAvatar().then((person) => {
      const refresh = [...avatar];
      refresh.splice(index, 1, person);
      setAvatar([...refresh]);
    });
    // console.log(...this.state.avatar);
  };

  const refreshAll = async () => {
    const refreshAll = [...avatar];
    const refreshAvatar = await Promise.all(
      refreshAll.map(() => {
        fetchAvatar();
      }),
    );
    setAvatar(refreshAvatar);
  };

  return (
    <>
      <div className="container">
        <div>
          {avatar.map((people, index) => (
            <Img src={people.data[0].url} onClick={() => refreshAvatar(index)} />
          ))}
          <AddButton onClick={addAvatar} />
        </div>
        <div className="refreshContainer">
          <RefreshAllBtn onClick={refreshAll} />
        </div>
      </div>
    </>
  );
};

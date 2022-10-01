import { useState } from 'react';

export const useAvatars = (data) => {
  const [people, setPeople] = useState(data);
  const [loading, setLoading] = useState(false);

  const fetchAvatar = async () => {
    const resp = await fetch('https://tinyfac.es/api/data?limit=1&quality=0');
    if (!resp.ok) {
      alert('Sorry, the web site brokes down :( Try again in a few minutes.');
    }
    const data = await resp.json();
    return data[0];
  };

  const addAvatar = () => {
    fetchAvatar().then((person) => {
      setPeople([...people, { ...person }]);
    });
    console.log('addAvatar');
    setLoading(false);
  };

  const refreshAvatar = (index) => {
    fetchAvatar().then((person) => {
      const refresh = [...people];
      refresh.splice(index, 1, person);
      setPeople([...refresh]);
    });
    setLoading(false);
    console.log('refreshing avatar');
  };

  // When the user clicks on the "refresh all button",
  //loading text appears for a few moment
  const refreshAll = async () => {
    setLoading(true);
    const refreshAvatar = await Promise.all([...people].map(() => fetchAvatar()));
    setPeople(refreshAvatar);
    setLoading(false);
  };

  return {
    people,
    setPeople,
    loading,
    addAvatar,
    refreshAvatar,
    refreshAll,
  };
};

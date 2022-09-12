import "./App.css";
import React, { useState, useCallback, useRef } from "react";
import { GetButton } from "./components/GetButton";
import PhotoList from "./components/PhotoList";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [loading, setLoading] = useState(true);
  const [cantPhotos, setCantPhotos] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const counter = useRef(0);

  const handleNewPhoto = useCallback(() => {
    setCantPhotos((cant) => cant + 1);
  }, []);

  return (
    <div className="App">
      {console.log("render App: " + counter.current++)}
      <div className="grid-container">
        <ErrorBoundary>
          <PhotoList
            cantPhotos={cantPhotos}
            handleLoading={() => setLoading((loading) => !loading)}
            refresh={refresh}
            handleRefresh={() => setRefresh((refresh) => !refresh)}
          />
          <GetButton handleNewPhoto={handleNewPhoto} loading={loading} />
        </ErrorBoundary>
      </div>
      <footer>
        <button
          className="footer__button"
          onClick={() => setRefresh((refresh) => !refresh)}
        >
          Refresh All
        </button>
      </footer>
    </div>
  );
}

export default App;

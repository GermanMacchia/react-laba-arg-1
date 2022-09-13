/* eslint-disable react-hooks/exhaustive-deps */
import { PhotoContainer } from "./PhotoContainer";
import ErrorBoundary from "./ErrorBoundary";
import React, { useState, useEffect, useRef } from "react";
import fetchPhotos from "../fetchPhotos";

export default function PhotoList({
  cantPhotos,
  handleLoading,
  refresh,
  handleRefresh,
}) {
  const [data, setData] = useState([]);
  const [error, setError] = useState({ error: false, errorMessage: "" });
  const [photos, setPhotos] = useState([]);

  //call data from api into data array, set 10 values as default
  const init = async () => {
    const initialValue = 10;
    const response = await fetchPhotos(initialValue);
    if (response.status !== 200) {
      setError({
        error: true,
        errorMessage: `STATUS ${response.status}, ${response.statusText}`,
      });
    } else {
      const json = await response.json();
      const avatars = json.map((photo) => {
        return {
          id: photo.first_name + photo.id,
          url: photo.url,
          name: `${photo.first_name} ${photo.last_name}`,
        };
      });
      setData(avatars);
      handleLoading();
    }
  };

  //Push single photo into array from data array.
  //When data array is empty calls API again
  const pushPhoto = () => {
    if (data.length > 0) {
      const auxData = [...data];
      const newPhoto = auxData.pop();
      setPhotos((photos) => [...photos, newPhoto]);
      if (auxData.length === 0) {
        handleLoading();
        init();
      } else {
        setData(auxData);
      }
    }
  };

  //refresh as many values there are in photos
  const refreshAll = async () => {
    const response = await fetchPhotos(cantPhotos);
    if (response.status !== 200) {
      setError({
        error: true,
        errorMessage: `STATUS ${response.status}, ${response.statusText}`,
      });
    } else {
      const json = await response.json();
      const avatars = json.map((photo) => {
        return {
          id: photo.first_name + photo.id,
          url: photo.url,
          name: `${photo.first_name} ${photo.last_name}`,
        };
      });
      setPhotos(avatars);
      handleRefresh();
    }
  };

  //will throw error if error state changes
  useEffect(() => {
    if (error.error) {
      throw new Error(error.errorMessage);
    }
  }, [error]);

  //call once when render
  useEffect(() => {
    init();
  }, []);

  //call when refresh is set into TRUE
  useEffect(() => {
    if (refresh) {
      refreshAll();
    }
  }, [refresh]);

  //call every time when cantPhotos changes
  useEffect(() => {
    if (data) {
      pushPhoto();
    }
  }, [cantPhotos]);

  return (
    <>
      {photos &&
        photos.map((photo) => {
          return (
            <ErrorBoundary key={photo.name + photo.id}>
              <PhotoContainer url={photo.url} name={photo.name} id={photo.id} />
            </ErrorBoundary>
          );
        })}
    </>
  );
}

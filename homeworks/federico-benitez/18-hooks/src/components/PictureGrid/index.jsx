import React from 'react';
import { AddNewPhoto, Picture, RefreshButton } from '..';
import useHandleImage from '../../hooks/useHandleImages';
import styles from './style.module.css';

export default function PictureGrid() {
  const { images, isLoading, onAddNew, onRefreshAll, onRefreshOne } = useHandleImage();

  return (
    <>
      <ul className={styles.gridPhotos}>
        {images.map((img, i) => (
          <li key={i} onClick={() => onRefreshOne(i)}>
            <Picture url={img} isLoading={isLoading(i)} />
          </li>
        ))}
        <AddNewPhoto onClick={onAddNew} />
      </ul>
      {images.length > 0 && <RefreshButton onClick={onRefreshAll} />}
    </>
  );
}

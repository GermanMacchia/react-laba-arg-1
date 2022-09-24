import React, { useContext } from "react";
import { PhotoContainer } from "./PhotoContainer/PhotoContainer";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import { AppContext } from "../pages/context/AppContext";

export const PhotoList = () => {
  const { avatarQuantity } = useContext(AppContext);

  return (
    <>
      {Array(avatarQuantity.quantity)
        .fill()
        .map((emptyElement, idx) => (
          <ErrorBoundary key={idx}>
            <PhotoContainer id={idx} />
          </ErrorBoundary>
        ))}
    </>
  );
};

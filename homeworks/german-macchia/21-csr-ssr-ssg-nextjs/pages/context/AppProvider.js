import React, { useState } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const [reload, setReload] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const initialData = {
    avatarQuantity: {
      quantity,
      setQuantity,
    },
    reloadAll: {
      reload,
      setReload,
    },
  };

  return (
    <AppContext.Provider value={initialData}>{children}</AppContext.Provider>
  );
};

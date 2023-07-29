import React, { createContext, useEffect, useState } from "react";
export const DataProductosContext = createContext({ card: [] });

export const SolicitarDataProvider = ({ children }) => {
  const [saveInformation, setSaveInformation] = useState({});
  const [idUser, setIdUser] = useState(
    "PrQraF8rNzVF03YyL4iT4nd9eOie0apquCCAeVGJPxeA2YQZ9q"
  );
  const [card, setCard] = useState([]);
  const setCardLocalStorage = () => {
    localStorage.setItem(idUser, JSON.stringify(card));
  };
  const getCardLocalStorage = () => {
    setCard(JSON.parse(localStorage.getItem(idUser)));
  };
  const ClearCard = () => {
    setCard([]);
  };
  const isInCard = (itemId) => {
    return card.some((prod) => prod.id === itemId);
  };
  const AddItem = (item, quantity) => {
    if (!isInCard(item.id)) {
      setCard((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.log("el producto ya fue agregado");
    }
  };
  const RemoveItem = (itemID) => {
    const cardUpdated = card.filter((prod) => prod.id !== itemID);
    setCard(cardUpdated);
  };

  return (
    <DataProductosContext.Provider
      value={{
        AddItem,
        RemoveItem,
        ClearCard,
        isInCard,
        card,
        idUser,
        getCardLocalStorage,
        setCardLocalStorage,
        saveInformation,
        setSaveInformation,
      }}
    >
      {children}
    </DataProductosContext.Provider>
  );
};

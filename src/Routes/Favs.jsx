import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useGlobalStates();

  const imageSrc = state.theme === "dark" 
    ? "/images/favDark.png" 
    : "/images/favLigth.png";

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {state.favs.length > 0 ? (
            state.favs.map((dentist) => (
              <Card key={dentist.id} dentist={dentist} />
            ))
          ) : (
            <img className="noData" src={imageSrc} alt="NO HAY DATOS" />
          )}
      </div>
    </>
  );
};

export default Favs;

import React from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {dentistsStates} = useGlobalContext();
  
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {dentistsStates.favs && dentistsStates.favs.length > 0 ? (
          dentistsStates.favs.map((item) => (
            <article key={item.id}>
              <Card item={item}/>
            </article>
          ))
      ) : <p>No tienes favoritos todavía</p>}
      </div>
    </>
  );
};

export default Favs;

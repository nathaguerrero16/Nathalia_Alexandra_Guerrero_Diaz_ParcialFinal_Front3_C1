import React from "react";
import { useGlobalStates } from "./utils/Context";
import { Link } from "react-router-dom";

const Card = ({ dentist }) => {
  const { id, name, username } = dentist;
  const { state, dispatch } = useGlobalStates();
  const isFav = state.favs.find((fav) => fav.id == dentist.id);

  const addFav = () => {
    dispatch({ type: isFav ? "REMOVE_FAV" : "ADD_FAV", payload: dentist });
  };

  return (
    <div className="card">
      <Link to={"/dentist/" + id}>
        <img
          src="../../public/images/doctor.jpg"
          alt="dentist img"
          className="cardImg"
        />
        <h3>
          {name} {username}
        </h3>
      </Link>
      <button onClick={addFav} className="favButton">{isFav ? "🌟" : "⭐"}</button>
    </div>
  );
};

export default Card;

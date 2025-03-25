import React from "react";
import { useDispatch } from "react-redux";
import { setFilter  } from "../redux/filterTasks";
import "../styles/global.css";  // Style global

const FilterTasks = () => {
  const dispatch = useDispatch();

  // Fonction pour changer le filtre
  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value)); // Envoyer l'action avec la valeur sélectionnée
  };

  return (
    <div>
      <select onChange={handleFilterChange}>
        <option value="all">Toutes</option>
        <option value="completed">Terminées</option>
        <option value="incomplete">Non terminées</option>
      </select>
    </div>
  );
};


export default FilterTasks;

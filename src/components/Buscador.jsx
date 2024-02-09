import React, { useState } from "react";
import MiApi from "./MiApi";
import "./Buscador.css";

const Buscador = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <div className="buscador-container">
        <input
          type="text"
          className="buscador-input"
          placeholder="Buscar por nombre"
          value={search}
          onChange={handleSearch}
        />{" "}
      </div>
      <MiApi search={search} />
    </>
  );
};

export default Buscador;

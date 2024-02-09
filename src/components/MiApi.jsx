import React, { useState, useEffect } from "react";
import "./MiApi.css";

const MiApi = ({ search }) => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics?apikey=6c239dfba77820cd7c8db243b49dff7d`
      );
      const data = await response.json();
      setComics(
        data.data.results
          .filter((comic) =>
            comic.title.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => a.title.localeCompare(b.title))
      );
    };

    fetchData();
  }, [search]);

  const sortComicsAscending = () => {
    const sortedComics = [...comics].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setComics(sortedComics);
  };

  const sortComicsDescending = () => {
    const sortedComics = [...comics]
      .sort((a, b) => a.title.localeCompare(b.title))
      .reverse();
    setComics(sortedComics);
  };

  return (
    <>
      <div className="botones-orden">
        <button onClick={sortComicsAscending}>
          Organizar en orden alfabético (A-Z)
        </button>
        <button onClick={sortComicsDescending}>
          Organizar en sentido contrario (Z-A)
        </button>
      </div>
      <div className="app">
        {comics.map((comic) => (
          <div className="comic-container" key={comic.id}>
            <h2 className="comic-title">{comic.title}</h2>
            <p className="comic-format">{comic.format || "NONE"}</p>
            <img
              className="comic-image"
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MiApi;

import { useEffect, useState } from "react";
import { SideBarProps, GenreResponseProps } from '../types/allTypes'
import { Button } from "./Button";
import { api } from '../services/api';
import '../styles/sidebar.scss';


export function SideBar( {handleSetSelectedGenre, selectedGenreId}: SideBarProps) {
  // Complete aqui

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  function handleSelectedGenre(id: number) {
    handleSetSelectedGenre(id);
  }

  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleSelectedGenre(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
  )
}
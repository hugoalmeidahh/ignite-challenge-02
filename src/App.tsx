import { useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';



import './styles/global.scss';
export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1); //set "Ação" in load

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar handleSetSelectedGenre={setSelectedGenreId} selectedGenreId={selectedGenreId} />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}
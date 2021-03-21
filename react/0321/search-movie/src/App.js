import logo from './logo.svg';
import './App.css';

import { MoviesProvider } from './hooks/MovieContext';
import { SearchMovie } from './components/SearchMovie';
import { Movies } from './components/Movies';

function App() {
  return (
    <MoviesProvider>
      <SearchMovie />
      <Movies />
    </MoviesProvider>
  );
}

export default App;

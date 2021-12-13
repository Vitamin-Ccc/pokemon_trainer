import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Trainers from './components/Trainers';
import TrainerForm from './components/TrainerForm';
import Pokemons from './components/Pokemons';
import PokemonEdit from './components/PokemonEdit';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/trainers/:id/pokemons" element={<Pokemons />} />
        <Route path="/trainers/:trainer_id/pokemons/:id/edit" element={<PokemonEdit />} />
        <Route path="/trainers/new" element={<TrainerForm />} />
        <Route path="/trainers/:id/edit" element={<TrainerForm />} />
      </Routes>
    </div>
  );
}

export default App;

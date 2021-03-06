
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Film from './pages/Film';
import Main from './pages/Main';
import NotFound from './pages/NotFound';








function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="search_film_api/" element={<Main/>} />
        <Route path="search_film_api/Film" element={<Film/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Film from './pages/Film';
import Main from './pages/Main';
import NotFound from './pages/NotFound';








function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="" element={<Main/>} />
        <Route path="/film" element={<Film/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import SerailsList from "./components/SerailsList";
import SearchButton from "./components/UI/SearchButton";
import { fetchSerials } from './store/action-creators/fetchSerials';
import { useDispatch } from 'react-redux';



function App() {

  const dispatch = useDispatch()

  function getDispatch(){
    dispatch(fetchSerials())
  }
  return (
    <div className="App">
      <SerailsList/>
      <SearchButton onClick = {getDispatch}/>
    </div>
  );
}

export default App;

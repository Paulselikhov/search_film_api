import { useState } from "react";
import SerailsList from "./components/SerailsList";
import SearchButton from "./components/UI/SearchButton";
import { fetchSerials } from './store/action-creators/fetchSerials';
import { useDispatch } from 'react-redux';
import SearchInput from './components/UI/SearchInput';





function App() {

  const [inputValue, setInputValue] = useState('default')
  const dispatch = useDispatch()

  function getDispatch(){
    dispatch(fetchSerials())
  }
  return (
    <div className="App">
      <SerailsList/>
      <div> inputValue: {inputValue}</div>
      <div style = { {display: 'flex'}}>
        <SearchInput onChange={ (e) => setInputValue(e.target.value)}/>
        <SearchButton onClick={getDispatch}/>
      </div>
      
    </div>
  );
}

export default App;

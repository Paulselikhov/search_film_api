import { useState } from "react";
import SerailsList from "./components/SerailsList";
import SearchButton from "./components/UI/SearchButton";
import { fetchSerials } from './store/action-creators/fetchSerials';
import { useDispatch, useSelector } from 'react-redux';
import SearchInput from './components/UI/SearchInput';
import { inputReducer } from './store/reducers/inputReducer';






function App() {

  const showInput = useSelector( state => state.inputReducer)

  const [inputValue, setInputValue] = useState('default')
  const dispatch = useDispatch()

  function getDispatch(){
    dispatch(fetchSerials())
  }
  return (
    <div className="App">
      <SerailsList/>
      <div> inputValue: {showInput.inputValue}</div>
      <div style = { {display: 'flex'}}>
        <SearchInput/>
        <SearchButton onClick={getDispatch}/>
      </div>
      
    </div>
  );
}

export default App;

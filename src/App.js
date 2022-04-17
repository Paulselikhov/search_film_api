import SearchList from "./components/SearchList";
import SearchButton from "./components/UI/SearchButton";
import { fetchSerials } from './store/action-creators/fetchSerials';
import { useDispatch, useSelector } from 'react-redux';
import SearchInput from './components/UI/SearchInput';
import "./styles/App.css";
//import "./styles/nullstyle.css"







function App() {

  const showInput = useSelector( state => state.inputReducer)

  const dispatch = useDispatch()

  function getDispatch(){
    dispatch(fetchSerials(showInput.inputValue))
  }
  return (
    <div className="App">
      
      <div style = { {display: 'flex'}}>
        <SearchInput onChange = { (e) => dispatch({type: "SET_INPUT", payload: e.target.value })}/>
        <SearchButton onClick={getDispatch}/>
      </div>
        <SearchList/>
      
    </div>
  );
}

export default App;

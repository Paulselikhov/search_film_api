import React, { useState } from "react";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import { useDispatch } from "react-redux";
import { fetchSerials } from "../../../store/action-creators/fetchSerials";
import classes from "./Search.module.scss";

const SearchInputButton = () => {
  //const showInput = useSelector((state) => state.inputReducer);

  //как я понимаю ты сохраняешь значение инпута в редакс, чтобы использовать его в этой же компоненте
  //тогда лучше использовать useState внутри компоненты
  //как-то так
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  async function getDispatch(e) {
    //зачем здесь async??
    //dispatch(fetchSerials(showInput.inputValue, e));
    dispatch(fetchSerials(value, e)); //зачем в функцию fetchSerials ты кидаешь второй аргумент, если она принимает всего один
  }
  const changeInput = (e) => {
    setValue(e.target.value);
    //dispatch({ type: "SET_INPUT", payload: e.target.value });
  };

  return (
    <div className={classes.search}>
      {/*<SearchInput onChange = { (e) => dispatch({type: "SET_INPUT", payload: e.target.value })}/>*/}
      <SearchInput onChange={changeInput} value={value} />

      {/*<SearchButton onClick={ (e) => getDispatch(e)}/> */}
      {/* запись строкой ниже наного чище и чуточку производительнее, чем строкой выше)) */}
      <SearchButton onClick={getDispatch} />
    </div>
  );
};

export default SearchInputButton;

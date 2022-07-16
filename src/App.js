import React from "react";
import "./App.css"
import { useSelector,useDispatch } from "react-redux";
import { incNumber,decNumber } from './actions/index';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="container text-center mt-5">
      <h1>Increment/Decrement Counter</h1>
      <h4 className="quantity mt-5">using React and Redux</h4>
      <div className="quantity mt-5">
        <button title="Decrement" className="quantity_minus btn-secondary btn-sm" onClick={ () => dispatch(decNumber()) }>
        <span>-</span>
        </button>
        <input type="text" name="quantity"
          className="quantity_input" value={myState}/>
        
        <button title="Increment" className="quantity_plus btn-secondary btn-sm" onClick={ () => dispatch(incNumber()) }>
          <span>+</span>
        </button>
      </div>
    </div>
  );
};

export default App;

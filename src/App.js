
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/plusminus';
import AuthorizationRelatedStuff from './authorization';

function App() {
  //use useSelector to pull states out from redux store.
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      Counter: {counter}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <AuthorizationRelatedStuff/>
    </div>
  );
}

export default App;

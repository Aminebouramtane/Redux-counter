import { DECREMENT, INCREMENT } from './Redux/Actions/Type';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const the_value = useSelector(state => state.value);
  const dispatch = useDispatch();

  const incremant = () => {
    dispatch({
      type : INCREMENT
    });
  }

  const decremant = () => {
    dispatch({
      type : DECREMENT
    });
  }

  return (
    <div className='app'>
      <div className="">
        <button onClick={incremant} >+</button>
        <div className="">
          the value is { the_value }
        </div>
        <button onClick={decremant} >-</button>
      </div>
    </div>
  );
}

export default App;
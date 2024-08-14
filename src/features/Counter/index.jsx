import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
import styles from './styles.module.css';
import { Button } from '@mui/material';

CounterFeature.propTypes = {};

function CounterFeature() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const handleIncreaseClick = () => {
    const action = increase();
    console.log(action);
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    const action = decrease();
    console.log(action);
    dispatch(action);
  };

  return (
    <div className={styles.count}>
      Counter: {counter}
      <br />
      <Button variant="contained" onClick={handleIncreaseClick}>
        Increase
      </Button>
      <p></p>
      <Button variant="contained" onClick={handleDecreaseClick}>
        Decrease
      </Button>
    </div>
  );
}

export default CounterFeature;

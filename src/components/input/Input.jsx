import { useRef, useContext } from 'react';
import { globalContext } from '../../store/GlobalContext';
import { FiChevronDown } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import styles from './Input.module.css';

const Input = () => {
  const inputRef = useRef();

  const { dispatch } = useContext(globalContext);

  const handleClick = (e) => {
    dispatch({ type: 'TOGGLE' });
  };
  console.log('dddd');
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputRef.current.value.length > 0)
      dispatch({
        type: 'INPUT',
        payload: { value: inputRef.current.value, id: uuidv4() },
      });

    inputRef.current.value = '';
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <FiChevronDown onClick={handleClick} className={styles.inputIcon} />
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default Input;

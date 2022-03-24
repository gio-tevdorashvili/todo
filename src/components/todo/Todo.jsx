import { useContext } from 'react';
import { globalContext } from '../../store/GlobalContext';
import { FiCheck } from 'react-icons/fi';
import styles from './Todo.module.css';

const Todo = () => {
  const { state, dispatch } = useContext(globalContext);

  const handleClick = (e) => {
    dispatch({ type: 'CHECKED', payload: { id: e.currentTarget.id } });
  };

  return (
    <ul>
      {state[`${state.current}`].map((el) => {
        return (
          <li
            onClick={handleClick}
            id={el.id}
            key={el.id}
            className={
              el.checked ? `${styles.todo} ${styles.lineThrough}` : styles.todo
            }
          >
            <span id={el.id} className={styles.todoIcon}>
              {el.checked ? <FiCheck /> : ''}
            </span>{' '}
            {el.value}
          </li>
        );
      })}
    </ul>
  );
};

export default Todo;

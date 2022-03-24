import { useContext } from 'react';
import { globalContext } from '../../store/GlobalContext';
import styles from './Navigation.module.css';

const Navigation = () => {
  const { state, dispatch } = useContext(globalContext);

  const handleAll = () => dispatch({ type: 'ALL' });
  const handleActive = () => dispatch({ type: 'ACTIVE' });
  const handleCompleted = () => dispatch({ type: 'COMPLETED' });
  const handleClearCompleted = () => dispatch({ type: 'CLEAR_COMPLETED' });

  return (
    <ul className={styles.nav}>
      <div>
        {state.leftToDo} {`${state.leftToDo > 1 ? 'items' : 'item'}`} left
      </div>
      <ul className={styles.internalNav}>
        <li
          onClick={handleAll}
          className={state.activeList === 'all' ? styles.active : ''}
        >
          All
        </li>
        <li
          onClick={handleActive}
          className={state.activeList === 'active' ? styles.active : ''}
        >
          Active
        </li>
        <li
          onClick={handleCompleted}
          className={state.activeList === 'completed' ? styles.active : ''}
        >
          Completed
        </li>
      </ul>
      <li onClick={handleClearCompleted}>Clear Completed</li>
    </ul>
  );
};

export default Navigation;

import Input from '../input/Input';
import Todo from '../todo/Todo';
import Navigation from '../navigation/Navigation';
import LowerLines from '../lower-lines/LowerLines';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.container}>
      <h1>todos</h1>
      <div className={styles.todoContainer}>
        <Input />
        <Todo />
        <Navigation />
      </div>
      <LowerLines />
    </div>
  );
};

export default Main;

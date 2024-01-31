import Image from 'next/image'
import styles from '../styles/todo.module.css'

export default function ToDo(props) {
  const { todo, onChange, onDelete } = props;
  return (
    <div className={styles.toDoRow} key={todo.id}>
      <input 
        className={styles.toDoCheckbox} 
        name="completed" 
        type="checkbox" 
        checked={todo.completed} 
        value={todo.completed} 
        onChange={(e) => onChange(e, todo.id)}
      >
      </input>
      <input 
        className={styles.todoInput} 
        autoComplete='off' 
        name="name" 
        type="text" 
        value={todo.name} 
        onChange={(e) => onChange(e, todo.id)}
      >
      </input>
      <button 
        className={styles.deleteBtn} 
        onClick={() => onDelete(todo.id)}>
        <Image src="/delete-outline.svg" width="24" height="24" />
      </button>
    </div>
  )
}
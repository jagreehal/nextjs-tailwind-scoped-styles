import styles from './TailwindScopedComponent.module.css';

export default function Button() {
  return <button className={styles.button}>I use Tailwind classes</button>;
}

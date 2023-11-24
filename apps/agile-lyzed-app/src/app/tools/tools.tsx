import styles from './tools.module.css';

/* eslint-disable-next-line */
export interface ToolsProps {}

export function Tools(props: ToolsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Tools!</h1>
    </div>
  );
}

export default Tools;

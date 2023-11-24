import styles from './blogs.module.css';

/* eslint-disable-next-line */
export interface BlogsProps {}

export function Blogs(props: BlogsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Blogs!</h1>
    </div>
  );
}

export default Blogs;

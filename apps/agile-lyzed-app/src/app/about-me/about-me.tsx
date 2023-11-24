import styles from './about-me.module.css';

/* eslint-disable-next-line */
export interface AboutMeProps {}

export function AboutMe(props: AboutMeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AboutMe!</h1>
    </div>
  );
}

export default AboutMe;

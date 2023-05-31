import { Nav } from "react-bootstrap";
import styles from "./sidebar.module.scss";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <Nav className={styles.sidebar}>
        <Link to='/'>
          <span className={styles.span_link}>Главная</span>
        </Link>
        <Link to='/about-me'>
          <span className={styles.span_link}>Обо мне</span>
        </Link>
      </Nav>
    </>
  );
};

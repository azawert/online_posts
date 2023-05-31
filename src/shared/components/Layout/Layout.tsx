import { FC, PropsWithChildren, useState } from "react";
import { Container } from "react-bootstrap";
import { Header } from "./header/Header";
import styles from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [isNavOpened, setIsNavOpened] = useState(false);

  const toggleNav = () => {
    setIsNavOpened(!isNavOpened);
  };

  return (
    <>
      <Header handleMenuClick={toggleNav} isOpen={isNavOpened} />
      <Container fluid className={styles.main__container}>
        {children}
      </Container>
    </>
  );
};

export default Layout;

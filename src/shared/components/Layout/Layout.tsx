import { FC, PropsWithChildren, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Header } from "./header/Header";
import "./Layout.scss";
import { Sidebar } from "./sidebar/Sidebar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [isNavOpened, setIsNavOpened] = useState(false);

  const toggleNav = () => {
    setIsNavOpened(!isNavOpened);
  };

  return (
    <>
      <Header handleMenuClick={toggleNav} isOpen={isNavOpened} />
      <Container fluid>
        <Row>
          <Col md={2} className={`sidebar ${isNavOpened ? "show" : "hide"}`}>
            {isNavOpened && <Sidebar />}
          </Col>
          <Col md={9} className={"content__container"}>
            <div className='content'>{children}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;

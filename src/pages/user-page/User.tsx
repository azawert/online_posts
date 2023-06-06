import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  fetchSelectedUserRequest,
  fetchUserPostsRequest,
} from "../../store/actions/selectedUserAction";
import { UserInfo } from "./user-info/UserInfo";
import { Col, Container, Row } from "react-bootstrap";
import { UserPosts } from "./user-info/UserPosts";
import { Link } from "react-router-dom";

export const User: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSelectedUserRequest(Number(id)));
    dispatch(fetchUserPostsRequest(Number(id)));
  }, [id, dispatch]);
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <Link to='/'>
              <AiOutlineArrowLeft size={34} />
            </Link>
            <UserInfo />
          </Col>
          <Col xs={12} md={8}>
            <UserPosts />
          </Col>
        </Row>
      </Container>
    </>
  );
};

import { FC } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
export const UserInfo: FC = () => {
  const { user, isLoadingUser } = useTypedSelector(
    (state) => state.selectedUser
  );

  if (isLoadingUser) {
    return <Spinner />;
  }
  return (
    <Card>
      <Card.Header>
        <Link to='/'>
          <AiOutlineArrowLeft size={34} />
        </Link>
      </Card.Header>
      <Card.Body>
        <Card.Title>User info</Card.Title>
        <Card.Text>
          <strong>Email:</strong> {user?.email}
        </Card.Text>
        <Card.Text>
          <strong>Name:</strong> {user?.name}
        </Card.Text>
        <Card.Text>
          <strong>Phone:</strong> {user?.phone}
        </Card.Text>
        <Card.Text>
          <strong>Address:</strong> {user?.address.city} {user?.address.street}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

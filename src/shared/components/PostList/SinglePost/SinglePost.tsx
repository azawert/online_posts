import React, { FC, useState } from "react";
import { IPost } from "../../../../types/post.interface";
import { IUser } from "../../../../types/user.interface";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getCommentsByPostId } from "../../../../api/services/comments.service";
import { IComment } from "../../../../types/comment.interface";
import { CommentsBlock } from "./CommentsBlock";
interface ISingleProps {
  post: IPost;
  user: IUser;
}

export const SinglePost: FC<ISingleProps> = ({ post, user }) => {
  const navigate = useNavigate();
  const [comments, setComments] = useState<IComment[]>([]);
  const [isCommentsShowed, setIsCommentsShowed] = useState(false);
  const handleCommentsClick = async () => {
    if (!isCommentsShowed && comments.length === 0) {
      const comments = await getCommentsByPostId(post.id);
      setComments(comments);
    }
    setIsCommentsShowed(!isCommentsShowed);
  };
  const handleAvatarClick = () => {
    navigate(`/users/${post.userId}`);
  };
  return (
    user && (
      <Card style={{ marginBottom: "10px" }}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-between align-items-center'>
          <Button variant='primary' onClick={handleCommentsClick}>
            {isCommentsShowed ? "Hide Comments" : "Show Comments"}
          </Button>
          <div>
            <img
              src={`https://i.pravatar.cc/50?u=${user.id}`}
              alt='avatar'
              className='rounded-circle me-2'
              onClick={handleAvatarClick}
            />
            <span>Author</span>
          </div>
        </Card.Footer>
        {isCommentsShowed && <CommentsBlock comments={comments} />}
      </Card>
    )
  );
};

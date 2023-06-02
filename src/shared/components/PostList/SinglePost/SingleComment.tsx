import { FC } from "react";
import { ListGroup } from "react-bootstrap";
import { IComment } from "../../../../types/comment.interface";

interface ISingleCommentProps {
  comment: IComment;
}

export const SingleComment: FC<ISingleCommentProps> = ({ comment }) => {
  return (
    <ListGroup.Item key={comment.id}>
      <strong>{comment.email}</strong>
      <p>{comment.body}</p>
    </ListGroup.Item>
  );
};

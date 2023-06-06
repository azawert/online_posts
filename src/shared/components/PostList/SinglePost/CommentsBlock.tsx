import { FC } from "react";
import { IComment } from "../../../../types/comment.interface";
import { SingleComment } from "./SingleComment";
import { ListGroup } from "react-bootstrap";

interface ICommentsBlockProps {
  comments: IComment[];
}

export const CommentsBlock: FC<ICommentsBlockProps> = ({ comments }) => {
  return (
    <ListGroup variant='flush'>
      {comments.map((comment) => (
        <SingleComment comment={comment} key={comment.id} />
      ))}
    </ListGroup>
  );
};

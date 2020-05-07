import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const RenderDish = ({ dish }) => {
  if (dish != null) {
    return (
      <div className="col-12 col-md-5 mt-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
  else {
    return <div></div>
  }
}
const RenderComments = ({ comments }) => {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 mt-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map(comment => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit'
                }).format(new Date(comment.date))}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  else {
    return <div></div>
  }
};
const DishDetail = ({ dish }) => {
  if (dish != null) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={dish} />
          <RenderComments comments={dish.comments} />
        </div>
      </div>
    );
  }
  else {
    return <div></div>
  }
};

export default DishDetail;
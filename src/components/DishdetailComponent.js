import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          {this.renderComments(dish.comments)}
        </div>
      );
    }
    else {
      return <div></div>
    }
  }
  renderComments(comments) {
    if (comments != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map(comment => {
              const date = new Date(comment.date);
              return (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>--{comment.author}, {date.toDateString()}</p>
                  {/* <p>{new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                  }).format(new Date(comment.date))}</p> */}
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
  }
  render() {
    return this.renderDish(this.props.dish);
  }
}

export default DishDetail;
import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from "react-redux-form";

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
        <CommentForm />
      </div>
    );
  }
  else {
    return <div></div>
  }
};
const DishDetail = ({ dish, comments }) => {
  if (dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={dish} />
          <RenderComments comments={comments} />
        </div>
      </div>
    );
  }
  else {
    return <div></div>
  }
};

const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }
  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }
  handleSubmit = (values) => {
    console.log("The curent state is: " + JSON.stringify(values));
    alert("The curent state is: " + JSON.stringify(values));
    this.toggleModal();
  }
  render() {
    return (
      <>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil"></span> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Col>
                  <Label htmlFor="rating">Rating</Label>
                  <Control.select model=".rating" name="rating" className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Label htmlFor="author">Your Name</Label>
                  <Control.text model=".author" id="author" name="author"
                    className="form-control"
                    placeholder="Your Name"
                    validators={{ minLength: minLength(3), maxLength: maxLength(15) }} />
                  <Errors className="text-danger" model=".author" show="touched"
                    messages={{
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be 15 characters or less'
                    }} />
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Label htmlFor="comment">Comment</Label>
                  <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" />
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Button type="submit" color="primary">Submit</Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default DishDetail;
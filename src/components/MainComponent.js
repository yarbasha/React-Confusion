import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';

class Main extends Component {
  render() {
    const HomePage = () => (
      <Home
        dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
      />
    );
    const DishWithId = ({ match }) => (
      <DishDetail dish={this.props.dishes.filter(dish => dish.id === parseInt(match.params.dishId))[0]}
        comments={this.props.comments.filter(comment => comment.dishId === parseInt(match.params.dishId))}
        addComment={this.props.addComment} />
    );
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
};

const mapDispatchToprops = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
});

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(Main));
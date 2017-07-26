import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions/actions';
import * as Selectors from '../data/selectors';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    let posts = this.props.posts.map(post => (
      <li key={post.id}>
        <h3><Link to={"/single"}>{post.title}</Link></h3>
        <p>{post.excerpt}</p>
        <small>{post.author}</small>
      </li>
    ))
    return(
      <div className="home">
        <ul>
          {posts}
        </ul>
      </div>
    );
  }
}

Home.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    posts: Selectors.posts(state).toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => {
      dispatch(getPosts())
    }
  }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;

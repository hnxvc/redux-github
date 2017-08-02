import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepos } from '../actions/actions';
import * as Selectors from '../data/selectors';
import { Link, withRouter} from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRepos();
  }

  render() {
    let repos = this.props.repos.map(post => (
      <li key={post.id}>
        <h3><Link to={"/single/"+post.name}>{post.name}</Link></h3>
        <p>{post.description}</p>
        <small>{post.owner['login']}</small>
      </li>
    ))
    return(
      <div className="home">
        <ul>
          {repos}
        </ul>
      </div>
    );
  }
}

Home.propTypes = {
  getRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    repos: Selectors.repos(state).toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRepos: () => {
      dispatch(getRepos())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

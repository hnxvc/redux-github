import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepo } from '../actions/actions';
import * as Selectors from '../data/selectors';
import { withRouter } from 'react-router-dom';
import * as Services from '../services/services';

class Single extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getRepo(id);
  }

  render() {
    let repo = this.props.repo;
    return(
      <div className="single">
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
        <a href={repo.html_url} target="_blank">{repo.name}</a>
      </div>
    );
  }
}


Single.propTypes = {
  repo: PropTypes.object.isRequired,
  getRepo: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
  return {
    repo: Selectors.repo(state).toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRepo: (id) => dispatch(getRepo(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Single));

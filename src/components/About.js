import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAbout } from '../actions/actions';
import * as Selectors from '../data/selectors';
import { withRouter } from 'react-router-dom';

class About extends React.Component {

  componentDidMount() {
    this.props.getAbout();
  }

  render() {
    let about = this.props.about;
    return(
      <div className="about">
        <p>{about.intro}</p>
      </div>
    );
  }
}

About.propTypes = {
  getAbout: PropTypes.func.isRequired,
  about: PropTypes.object.isRequired
}


const mapStateToProps = (state) => {
  return {
    about: Selectors.about(state).toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAbout: () => dispatch(getAbout()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));

import React from 'react';

const Single = ({match}) => (
  <div className="single">
    single {match.params.id}
  </div>
);

export default Single;

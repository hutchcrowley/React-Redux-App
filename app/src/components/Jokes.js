import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getData } from "../redux/actions/index";

const Jokes = ({ getData, data, isFetching, error }) => {
  const [joke, setJoke] = useState();

    useEffect(() => {
      getData();
      setJoke(data);
    }, []);

  if (isFetching) {
    return <h2>Fetching a joke now...</h2>;
  }
  if (error) {
    return (
      <div className='error'>
        <h2>Error:</h2>
        <h3>{error}</h3>
      </div>
    );
  }
  return (
    <div className='joke'>
      <h2> Joke:</h2>
      <h3>{data}</h3>
      <button onClick={getData}>Get new joke</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getData })(Jokes);

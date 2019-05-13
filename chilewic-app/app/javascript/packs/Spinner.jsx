import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Spinner = props => {
  return(
  <div className={props.loading ? "sweet-loading" : "ocultar"}>
    <div className={"spinner"}>
      <ScaleLoader color={"#000"} loading={props.loading} />
    </div>
  </div>
  );
};

export default Spinner;
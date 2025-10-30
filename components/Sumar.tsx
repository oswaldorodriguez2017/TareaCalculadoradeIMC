import React from 'react';

const Sumar = (props:any|unknown):any => {

 const aumentar = () => {
    if (props.nombreVariable === "peso") {
      props.setPeso(props.prevPeso + 1);
    } else if (props.nombreVariable === "altura") {
      props.setAltura(props.prevAltura + 1);
    }
  };

  return (
    <button className="btn btn-primary" onClick={aumentar}>
      Sumar
    </button>

    

  );
};

export default Sumar;
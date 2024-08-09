import React from 'react';

function Alert(props) {
  return (
    props.message && (
      <div className={`alert alert-${props.message.type} alert-dismissible fade show`} role="alert">
        <strong>{props.message.type.charAt(0).toUpperCase() + props.message.type.slice(1)}</strong> {props.message.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
    )
  );
}

export default Alert;

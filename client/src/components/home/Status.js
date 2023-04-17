import React from 'react'

import { useDispatch } from "react-redux";
import { GLOBALTYPES } from '../../redux/actions/globalTypes'

const Status = () => {
    
    const dispatch = useDispatch();
    return (
      <div className="status my-3 d-flex">
        
        <button
          onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
          className="btn-1 outer-shadow hover-in-shadow statusBtn "
          style={{ height:"50px" }}
        >
          <span >
             Create Post
          </span>
        </button>
      </div>
    );
}

export default Status

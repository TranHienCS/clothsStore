import React from 'react';
import './formError.css'
function formError(props){
    if(props.isHidden){return null;}
    return(
        <div className="form-warning">
            {props.errorMessage}
        </div>
    )
}

export default formError;
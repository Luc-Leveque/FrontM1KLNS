import React from 'react';
import './index.scss';

const index = (props) => {
    return(
        <div className=''>
            <h1>
                {props.text}
            </h1>
        </div>
    )
}

export default index;
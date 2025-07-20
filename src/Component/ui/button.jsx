import React from 'react';
import '../Css/button.css';
import '../Css/media.css';


const Button = ({content , logo }) => {
 

  return (
      <button className='button'>
       <span className='btn-span'>{content}</span> 
        <i class={logo} ></i> 
      </button>
  )
}

export default Button

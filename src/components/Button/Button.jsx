import React from 'react';
import ButtonStyles from './Button.module.scss';


const Button = ({btnText, onClick, color}) => {
    const style= {
        backgroundColor: color,
    }
  return (
    <button className={ButtonStyles.button} onClick={onClick} style={style}>{btnText}</button>
  )
}

export default Button
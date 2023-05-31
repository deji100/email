import React,  {useState} from 'react'


const Button = (props) => {
//   const [mail, setEmail] = useState(false);

  return (
    <button 
        className={props.className}
        type="button"
        onClick={() => props.handleMail(prev => !prev)}>
        <div></div>
        <img src={props.img} alt="logo" />
        {props.text}
    </button>
  )
}

export default Button
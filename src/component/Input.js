import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'


function Input() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [isTrue, setIsTrue] = useState(true);

  const isEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailRegex.test(email)
  }

  const onChangeInput = (key) => (e) => {
    if(isEmail(login.email) === true || login.email === ""){
      setIsTrue(true);
    }else{
      setIsTrue(false);
    }

    setLogin({...login,[key]: e.target.value});
  }
  
  const [viewPw, setViewPw] = useState(true);

  return(
    <div className = "InputBox">
      <div className = "inputDiv">
        <input type = "text" className = {isTrue ? "inputFrom" : "inputFrom_none"} placeholder=" " onChange={onChangeInput('email')} />
        <label htmlFor = "" className = "inputLabel">E-mail</label>
      </div>
      <div className = "inputDiv">
        <input type = {viewPw ? "password" : "text"} className = "inputFrom" placeholder=" " onChange = {onChangeInput('password')} />
        <label htmlFor = "" className = "inputLabel">Password</label>
        <FontAwesomeIcon icon={viewPw ? faEye : faEyeSlash} onClick={() => setViewPw(!viewPw)} className="eye" />
      </div>
    </div>
  )
}

export default Input
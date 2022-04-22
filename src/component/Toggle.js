import React, { useRef } from "react";

function Toggle() {
  const btn = useRef();

  function leftClick() {
    btn.current.style = 'left: 0;';
  }

  function rightClick() {
    btn.current.style = 'left: 110px;';
  }

  return(
  <div className="form-box">
    <div className="button-box">
      <div id="btn" ref={btn}></div>
      <button type="button" className="toggle-btn" onClick={leftClick}>기본</button>
      <button type="button" className="toggle-btn" onClick={rightClick}>상세</button>
    </div>
  </div>
  )
}

export default Toggle
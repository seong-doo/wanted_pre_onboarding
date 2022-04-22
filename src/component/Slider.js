import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Slider() {
  const [value, setValue] = useState(0);

  const getBackgroundSize = () => {
    return { backgroundSize: `${value}% 100%`}
  }

  return(
    <div className = "rangeBox">
      <div className = "rangeValue">
        <div className = "valueNum">{value}</div>
        <FontAwesomeIcon icon = {faPercent} className = "persent" />
      </div>
      <div className = "rangeSlider">
        <input type = "range" max = {100} value = {value} 
        className = "slider" id="myRange"
        onChange = {(e) => setValue(e.target.valueAsNumber)}
        style = {getBackgroundSize()} />
      </div>
    </div>
  )
}

export default Slider;
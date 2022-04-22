import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Dropdown() {
  const stack = ["React", "JavaScript", "Angular", "Vue", "HTML", "SASS", "AWS", "Docker", "React-Native"];
  const [isDrop, setIsDrop] = useState(false);
  const [isSelected, setIsSelected] = useState('Select Stack');
  const [list, setList] = useState(stack);

  const onFiltered = (e) => {
      setList(stack.filter((el) => el.toLowerCase().includes(e.target.value.toLowerCase())));
  }

  return(
    <div className = "dropdownBox">
      <div className = "dropdown">
        <div className = "dropdownBtn" onClick = {() => setIsDrop(!isDrop)}>
          {isSelected}
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        {isDrop ? (
        <div className = "dropList">
          <div className = "item search">
            <input type = "text" className = "searchInput" onChange = {(e) => onFiltered(e)} />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className = "item" onClick = {(e) => {
              setIsSelected("All Stacks")
              setIsDrop(false)
              setList(stack)
            }}>All Stacks</div>
          {list.map((el, i) => (
            <div className = "item"
            key = {i} 
            onClick = {(e) => {
              setIsSelected(el)
              setIsDrop(false)
            }}>{el}</div>
          ))}
        </div>
        ) : null}
      </div>
    </div>
  )
}

export default Dropdown
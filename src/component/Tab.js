import { useState } from 'react';
import React, { useRef } from "react";

function Tab() {
  const [changeTab, setChangeTab] = useState(0);
  const movingTab = useRef();

  const tabContent = [
    { name: 'Tab-1', content: 'Content-1' },
    { name: 'Tab-2', content: 'Content-2' },
    { name: 'Tab-3', content: 'Content-3' },
  ]

  const handleTabMenu = (i) => {
    setChangeTab(i);
    movingTab.current.style = `left: ${(50/3)*i}vw;`;
  }

  return(
    <>
      <div>
        <div id = "tab" ref={movingTab}></div>
        <ul className="Tabs">
          {tabContent.map((el, i) => {
            return (
              <li key={i} className={changeTab === i ? 'tabMenu focused' : 'tabMenu'} onClick={() => handleTabMenu(i)}>{el.name}</li>
            )
          })}
        </ul>
        <div className="tabContent">
          <p>{tabContent[changeTab].content}</p>
        </div>
      </div>
    </>
  )
}

export default Tab
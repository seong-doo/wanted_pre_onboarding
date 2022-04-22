import './App.css';
import Toggle from './component/Toggle';
import Tab from './component/Tab';
import Slider from './component/Slider';
import Input from './component/Input';
import Dropdown from './component/Dropdown';

function App() {
  return (
    <div className="boxWrap">
      <div className="title">Wanted Pre Onboarding Assignment</div>
      <div className="box">
        <div className="boxTitle">Toggle</div>
        <Toggle />
      </div>
      <div className="box">
        <div className="boxTitle">Tab</div>
        <Tab />
      </div>
      <div className="box">
        <div className="boxTitle">Slider</div>
        <Slider />
      </div>
      <div className="box">
        <div className="boxTitle">Input</div>
        <Input />
      </div>
      <div className="box Drop">
        <div className="boxTitle">Dropdown</div>
        <Dropdown />
      </div>
    </div>
);
}

export default App;

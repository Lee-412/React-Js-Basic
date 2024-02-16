import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
// import DemoChaningForm from './Example/DemoChaningForm';
import DemoForm from './Example/DemoForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <DemoForm></DemoForm> */}
        <MyComponent />
        {/* <DemoChaningForm /> */}
        {/* <MyComponent></MyComponent> */}
      </header>

    </div>
  );
}

export default App;

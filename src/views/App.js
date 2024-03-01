import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
// import DemoChaningForm from './Example/DemoChaningForm';
// import DemoForm from './Example/DemoForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TodoAppComponent from './TodoApp/todoAppComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoAppComponent />
        {/* <DemoForm></DemoForm> */}
        {/* <MyComponent /> */}
        {/* <DemoChaningForm /> */}
        {/* <MyComponent></MyComponent> */}

        {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition="bounce"  // Use the name of the CSS class here
        /> */}
        <ToastContainer
          position="top-right"
          autoClose={1100}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition="bounce"
        />
      </header>

    </div>
  );
}

export default App;

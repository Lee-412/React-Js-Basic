import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
// import DemoChaningForm from './Example/DemoChaningForm';
// import DemoForm from './Example/DemoForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavCom from './nav/NavCom';
import TodoAppComponent from './TodoApp/todoAppComponent';
import HomeCom from './Home/HomeCom';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Routes
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavCom />
          <img src={logo} className="App-logo" alt="logo" />


          <Routes>
            <Route path="/" element={<HomeCom />} />
            <Route path="/todos" element={<TodoAppComponent />} />
            <Route path="/job" element={<MyComponent />} />
          </Routes>


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
    </BrowserRouter>
  );
}

export default App;

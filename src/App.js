
// import ApiFetchingData from './ApiFetchingData';
import { useReducer } from 'react';
import './App.css';
// import Counter from './Counter';
// import { createStore } from 'redux';
// import FormSlice from './Redux Components/FormSlice';
// import FormStore from './Redux Components/FormStore';
import store from './Redux Components/FormStore'
import FormComponents from './FormComponents';
import { Provider } from 'react-redux';
import './Redux Components/ReduxFormCSS.css'

function App() {
  // const store = createStore(useReducer)

  return (
    <div className="App"> 
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Login/> */}
      <Provider store={store}>
        <FormComponents/>
      </Provider>
    </div>
  );
}

export default App;

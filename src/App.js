import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './pages/Header/Header';
import Nav from './pages/Nav/Nav';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <LoginPage/> 
      {/* <Routes>
        <Route path='/login' element={ <LoginPage/> }/>
      </Routes> */}
    </div>
  );
}

export default App;

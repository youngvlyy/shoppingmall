import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './pages/Header/Header';
import Nav from './pages/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Nav/> */}
      <LoginPage/>
    </div>
  );
}

export default App;

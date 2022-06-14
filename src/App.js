import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import RegistrationForm from './components/registrationForm'
import LoginForm from './components/login'

function App() {
  return (
    <div className="App">
    <Header/>
    <RegistrationForm/>
    <LoginForm/>
    </div>
  );
}

export default App;

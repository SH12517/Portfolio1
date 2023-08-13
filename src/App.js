import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Nav from './component/Nav';
import './css/style.css'
import Home from './component/Home';
function App(){
  return (
   <div>
    <Nav/>
    <Home></Home>
    
   </div>
  );
}

export default App;

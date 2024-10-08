// import {Login} from './auth/Login'
// import {Signup} from './auth/Signup'
import { Login } from './auth/Login';
import { SignUp, Signup } from './auth/Signup';
import Home from './Home';
// setting up routes
import { Routes,Route } from 'react-router-dom';
const App=()=> {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
      {/* <Signup />
      <Login /> */}
    </div>
  );
}

export default App;

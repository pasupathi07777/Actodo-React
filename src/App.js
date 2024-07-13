

import './App.css';

import { Route, Routes } from 'react-router-dom';
import Login from './user/Login';
import Signup from './user/Signup';
import Landing from './Components/Landing';

import Dataprovider from './data/Dataprovider';

function App() {



  return (


    <div className=' w-full p-0 m-0  min-h-[100vh]  flex justify-center items-start py-0 bg-white sm:bg-black '  >
      <Dataprovider>


        <Routes>
          <Route path='/' index element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/landing' element={<Landing />} />


        </Routes>
      </Dataprovider>









    </div>


  );
}

export default App;


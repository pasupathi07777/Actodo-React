

import React, { useContext } from 'react';
import Addtodo from './Addtodo';
import Cart from './Cart';
import Header from './Header';
import Todolis from './Todolist'
import { useLocation } from 'react-router-dom';

import { arrProvider } from '../data/Dataprovider';


const Landing = () => {
  let mass=useLocation()
  const { cartDatails, handleSubmitTwo, handleDelete, userInput, setUserInput, display } = useContext(arrProvider);

  return (
    <div className="bg-white flex flex-col  border rounded-md w-full  min-h-[100vh]  px-3 py-4 m-0 ">
      <Header mass={mass} />
      <div className="carts grid grid-cols-1 sm:grid-cols-3  my-4 gap-3 ">
        {cartDatails.map((e, i) => (
          <Cart e={e} key={i} />
        ))}
      </div>
      <div className="body flex flex-col sm:flex-r gap-5">
        <Addtodo userInput={userInput} setUserInput={setUserInput} handleSubmitTwo={handleSubmitTwo} />
        <Todolis display={display} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Landing;

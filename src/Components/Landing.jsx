


// import Dataprovider, { arrProvider } from '../data/Dataprovider';

// const Landing = () => {
 

//   let { mass,cartDatails,handleSumitTwo,handleDelete,userInput,setUserInput,display,setdisplay}=useContext(arrProvider)
//   return (
//     <div className="bg-white p-10 border rounded-md">
//       <Header />
//       <div className="carts flex flex-wrap my-4 gap-4 ">
//         {cartDatails.map((e, i) => (
//           <Cart e={e} key={i} />
//         ))}

//       </div>
//       <div className="body  flex flex-col sm:flex-row  gap-5  ">
//         <Addtodo userInput={userInput} setUserInput={setUserInput} handleSumitTwo={handleSumitTwo} />
//         <Todolist display={display} handleDelete={handleDelete} />


//       </div>

//     </div>
//   )
// }

// export default Landing

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
    <div className="bg-white p-10 border rounded-md w-full">
      <Header mass={mass} />
      <div className="carts flex flex-wrap my-4 gap-4">
        {cartDatails.map((e, i) => (
          <Cart e={e} key={i} />
        ))}
      </div>
      <div className="body flex flex-col sm:flex-row gap-5">
        <Addtodo userInput={userInput} setUserInput={setUserInput} handleSubmitTwo={handleSubmitTwo} />
        <Todolis display={display} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Landing;

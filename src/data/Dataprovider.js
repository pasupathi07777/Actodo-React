import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import delIcon from '../accert/img/trash.png'
let arrProvider = createContext()


const Dataprovider = ({ children }) => {

  let date = new Date()

let monthName = date.toLocaleString('en-US', { month: 'long' });


  console.log(date)


  let [dataBase, setdataBase] = useState([])
  let [userName, setuserName] = useState("")
  let [userpass, setuserpass] = useState("")
  let [userInput, setUserInput] = useState("")
  let [display, setdisplay] = useState([])
  let [alert, setalert] = useState(true)

  let nav = useNavigate()
  let cartDatails = [
    {
      title: "23°C",
      subTitle: "Kanniyakumari",
      bgColor: "#8272DA"
    },
    {
      title: monthName,
      subTitle: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
      bgColor: "#FD6663"

    },
    {
      title: "Built Using",
      subTitle: "React",
      bgColor: "#FCA201"
    }
  ]
  let handleSumitTwo = () => {
    if(userInput===""){
      return
    }

    setdisplay([...display, { id: display.length + 1, detail: userInput }])
    console.log(display)
    setUserInput("")
  }

  let handleDelete = (rec) => {
    console.log(rec)
    setdisplay((preValue) => (
      preValue.filter((e, i) => e.id !== rec)
    ))
    console.log(display)
  }


  let handleSumit = (res) => {

    if (res === "login") {



      dataBase.forEach((e) => {
        if (e.name === userName && e.pass === userpass) {
          nav('/landing', { state: { name: userName } })
          setalert(true)
          setuserName("")
          setuserpass("")
          console.log("login success")
        



        }

      })
      if (alert) {
        setalert(false)

      }

    } else {

      setdataBase([...dataBase, { name: userName, pass: userpass }])
      nav("/")

      setuserName("")
      setuserpass("")

      console.log(dataBase)


    }}
  return (
    <arrProvider.Provider value={{
      dataBase, setdataBase, userName, setuserName, userpass, setuserpass, alert, setalert, handleSumit,
      cartDatails, handleSumitTwo, handleDelete, userInput, setUserInput, display, setdisplay,  delIcon



    }}>
      {children}

    </arrProvider.Provider>

  )
}

export default Dataprovider
export { arrProvider }




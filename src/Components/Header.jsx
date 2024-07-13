




const Header = ({mass}) => {


  console.log(mass)
  return (
    <div className="">
        <h1 className='text-3xl font-medium '>{mass.state.name}</h1>
        <p>I am help to manage your activities : )</p>
    </div>
  )
}

export default Header
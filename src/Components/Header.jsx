




const Header = ({mass}) => {


  console.log(mass)
  return (
    <div className="flex flex-col gap-1">
        <h1 className='text-3xl font-semibold capitalize '>{mass.state.name}</h1>
        <p className="font-medium">I am help to manage your activities : )</p>
    </div>
  )
}

export default Header
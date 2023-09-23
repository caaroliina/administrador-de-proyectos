import arrow from "../../assets/svg/arrow-left-line.svg"
import logo from "../../assets/images/logo.png"
import { useLocation, useNavigate } from "react-router-dom"
const NavBar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const goBack = () => {
    navigate("/")
  }

  const create = () => {
    navigate("/create")
  }

  return (
    <div className="min-w-screen flex flex-col lg:grid lg:grid-rows-2 bg-grey1">
      <div className="border-b border-grey5 px-4 py-1">
        <img className="h-8 " src={logo} alt="logo Esto Es" />
      </div>
      {/* <div className="justify-between border-b border-grey5 "> */}
      {
        pathname.includes("create") 
        && (
          <div className="flex items-center font-inter border-b border-grey5">
            <div className="flex items-center px-4 py-2 " onClick={() => goBack()}>
              <img className="ml-2" src={arrow} alt="svg arrow left" />
              <p className="text-textcolor text-xs font-normal">Back</p>
            </div>
            <h2 className="text-headingColor text-sm font-semibold pl-4">Add project</h2>
          </div>
        )
        }
        { pathname.includes("edit") && 
          <div className="flex items-center font-inter border-b border-grey5">
          <div className="flex items-center px-4 py-2 "  onClick={() => goBack()}>
            <img className="ml-2" src={arrow} alt="svg arrow left" />
            <p className="text-textcolor text-xs font-normal">Back</p>
          </div>
          <h2 className="text-headingColor text-sm font-semibold pl-4">Edit project</h2>
        </div>
      } 
      {
        !pathname.includes("edit") && !pathname.includes("create") && 
        <div className="flex items-center justify-between border-b border-grey5 py-1 px-4">
            <h2 className="font-inter text-base text-headingColor font-semibold">My projects</h2>
            <button className="flex items-center bg-dustRed rounded text-grey1 font-roboto p-1 hover:bg-red-600" onClick={() => create()}> 
              <p className="text-xl">+</p>
              <p className="text-xs">Add project</p>
            </button>
          </div>
      }
        
        
    </div>
  )
}

export default NavBar;
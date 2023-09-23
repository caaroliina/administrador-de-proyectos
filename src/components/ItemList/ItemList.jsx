import more from "../../assets/svg/more-2-fill.svg"
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import vector from "../../assets/svg/vector.svg"

const ItemList = ({ isMenuVisible, toggleMenu }) => {

  return(
    <tr className="text-textcolor flex justify-between border-b border-grey5">
      <div className="py-2 px-4 flex flex-col">
        <td className="w-80 ">
          <h3 className="font-roboto font-normal text-base text-textcolor">Landing page</h3>
          <p className="font-roboto font-normal text-xs text-textcolorsecondary">Creation date:  09/09/2020 10:30 am</p>
        </td>
        <td className=" w-60 sm:flex hidden">Walt Cosani</td>
        <td className="w-60 pt-1">
          <img src="" alt="" />
          <p className="text-sm font-roboto font-normal text-textcolor">Ignacio Truffa</p>
        </td>
        </div>
        <div className="pt-3 pr-4">
        <div className="flex flex-col items-end">
          <img className="h-6 w-6" src={more} alt="more options" onClick={toggleMenu} />
          {isMenuVisible && (
          <div className=" flex flex-col items-end ">
            <img src={vector} alt="" className="flex items-end w-3 h-3 pr-0.5"/>
            <DropdownMenu />
          </div>
          )}

        </div>
      </div>
    </tr>
  )
}

export default ItemList;
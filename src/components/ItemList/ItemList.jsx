import more from "../../assets/svg/more-2-fill.svg"
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import vector from "../../assets/svg/vector.svg"

const ItemList = ({ id, title, date, projectManager, assignedTo, status, isMenuVisible, toggleMenu, handleDelete, handleEdit }) => {

  return(
    <tr className="text-textcolor flex justify-between border-b border-grey5">
      <div className="py-2 px-4 flex flex-col">
        <td className="w-80 ">
          <h3 className="font-roboto font-normal text-base text-textcolor">{title}</h3>
          <p className="font-roboto font-normal text-xs text-textcolorsecondary">Creation date: {date}</p>
        </td>
        <td className=" w-60 sm:flex hidden">{projectManager}</td>
        <td className="w-60 pt-1">
          <img src="" alt="" />
          <p className="text-sm font-roboto font-normal text-textcolor">{assignedTo}</p>
        </td>
      </div>
      <div className="pt-3 pr-4">
        <div className="flex flex-col items-end">
          <img className="h-6 w-6" src={more} alt="more options" onClick={toggleMenu} />
          {isMenuVisible && (
          <div className=" flex flex-col items-end ">
            <img src={vector} alt="" className="flex items-end w-3 h-3 pr-0.5"/>
            <DropdownMenu id={id} handleDelete={handleDelete} handleEdit={handleEdit}/>
          </div>
          )}

        </div>
      </div>
    </tr>
  )
}

export default ItemList;
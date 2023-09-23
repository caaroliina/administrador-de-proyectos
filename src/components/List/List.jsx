import { useState } from "react";
import ItemList from "../ItemList/ItemList";

const List = () => {
  const [isMenuVisible, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isMenuVisible);
  };
  return (
    <div className="py-3 min-h-screen">
      <table className="flex flex-col bg-grey1  rounded">
        <tr className="hidden border-b border-grey5">
          <div className="lg:px-6 ">
            <td className="w-80">Project info</td>
            <td className="w-60">Project Manager</td>
            <td className="w-60">Assigned to</td>
            <td className="w-24">Status</td>
            <td className="w-24">Action</td>
          </div>
        </tr>
        <ItemList toggleMenu={toggleMenu} isMenuVisible={isMenuVisible}/>
      </table>
    </div>
  )
}

export default List;
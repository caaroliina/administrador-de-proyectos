import { useState } from "react";
import ItemList from "../ItemList/ItemList";

const List = () => {
  const [isMenuVisible, setIsOpen] = useState(false);
  // eslint-disable-next-line
  const [list, setList] = useState([
    {
      id:1,
      title: "Landing page",
      date: "09/09/2020 10:30 am",
      projectManager: "Walt Cosani",
      assignedTo: "Ignacio Truffa",
      status: "Enabled",
    },
    {
      id:2,
      title: "E-Commerce Shop",
      date: "09/09/2020 10:30 pm",
      projectManager: "Walt Cosani",
      assignedTo: "Ignacio Truffa",
      status: "Enabled",
    },
    {
      id:3,
      title: "CRM Linkroom",
      date: "09/09/2020 10:30 pm",
      projectManager: "Walt Cosani",
      assignedTo: "Ignacio Truffa",
      status: "Enabled",
    }
  ])
  const handleDelete = (id) => {

  };
  const handleEdit = () => {

  }
  const toggleMenu = (id) => {
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
        {
          list.map((item) =>{
            return <ItemList 
              key={item.id}
              id={item.id}
              title={item.title}
              date={item.date}
              projectManager={item.projectManager}
              assignedTo={item.assignedTo}
              status={item.status}
              toggleMenu={toggleMenu} 
              isMenuVisible={isMenuVisible}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          })
        }
      </table>
    </div>
  )
}

export default List;
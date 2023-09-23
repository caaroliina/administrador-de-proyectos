import edit from "../../assets/svg/edit-box-line.svg";
import del from "../../assets/svg/delete-bin-7-line.svg"
const DropdownMenu = () => {

  const handleEdit = () => {

  };

  const handleDelete = () => {

  };

  return (
    <div className="bg-tableheader rounded shadow">
        <ul className="text-xs font-roboto font-normal text-grey9">
          <li onClick={handleEdit} className="flex w-44 border-b border-grey5 p-2 hover:bg-transition">
            <img src={edit} alt="" className="pl-4"/>
            <p className="pl-3 ">Editar</p>
          </li>
          <li onClick={handleDelete} className="flex w-44 p-2 hover:bg-transition">
            <img src={del} alt="" className="pl-4"/>
            <p className="pl-3">Eliminar</p>
          </li>
        </ul>
    </div>
  );
};

export default DropdownMenu;

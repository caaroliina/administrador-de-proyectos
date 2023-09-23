const EditForm = () => {
  const handleSubmit = () => {
  };

  return (
    <form onSubmit={handleSubmit} className="bg-grey1 mt-4 mb-10 drop-shadow-sm">
      <div className="py-8 px-4 font-roboto font-normal text-sm">
        <div className="flex flex-col">
          <label>Project name</label>
          <input className="h-10 mt-0.5 border border-gray5 rounded px-3 py-2"/>
        </div>
        <div className="flex flex-col mt-4">
          <label>Description</label>
          <input className="h-10 mt-0.5 border border-gray5 rounded px-3 py-2"/>
        </div>
        <div className="flex flex-col mt-4">
          <label>Project manager</label>
          <select className="h-10 mt-0.5 border border-gray5 rounded px-3 py-2" name="" id="">
            <option disabled>Select a person</option>
            <option value="">Walt Cosani</option>
          </select>
        </div>
        <div className="flex flex-col mt-4">
          <label>Assigned to</label>
          <select className="h-10 mt-0.5 border border-gray5 rounded px-3 py-2" name="" id="">
            <option disabled>Select a person</option>
            <option value="">Ignacio Truffa</option>
          </select>
        </div>
        <div className="flex flex-col mt-4">
          <label>Status</label>
          <select className="h-10 mt-0.5 border border-gray5 rounded px-3 py-2" name="Select a person" id="">
            <option value="">Enabled</option>
            <option value="">Disbaled</option>
          </select>
        </div>
        <button className="bg-dustRed text-grey1 text-base py-2 px-4 rounded mt-4">
          Create project
        </button>
      </div>
    </form>
  )
};

export default EditForm;
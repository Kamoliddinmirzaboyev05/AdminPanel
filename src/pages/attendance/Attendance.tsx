import { MdOutlinePersonAdd } from "react-icons/md";

function Attendance() {
  return (
    <div className="container">
      <div className="w-full ">
        <div className="pageTitle flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold">Davomat nazorat</h2>
          <button className="bg-blue-600 flex  py-2 px-2 items-center gap-2 text-white rounded">
            <MdOutlinePersonAdd className="text-xl" />
            Qavat sardori qo'shish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Attendance;

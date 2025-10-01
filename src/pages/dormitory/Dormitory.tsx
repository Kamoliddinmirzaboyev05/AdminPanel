import CreatableSelect from "react-select/creatable";
import { CiFilter } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import "./Dormitory.css";
import { Link } from "react-router-dom";

function Dormitory() {
  let genderOptions = [
    { value: "erkak", label: "Erkak" },
    { value: "ayol", label: "Ayol" },
  ];
  let roomStatusOptions = [
    { value: "tolgan", label: "To'lgan" },
    { value: "tolmagan", label: "To'lmagan" },
    { value: "bosh", label: "Bo'sh" },
  ];
  let rooms = [
    { id: 1, name: "101-xona", status: "Bo'sh" },
    { id: 2, name: "102-xona", status: "To'lgan" },
    { id: 3, name: "103-xona", status: "Bo'sh" },
    { id: 4, name: "104-xona", status: "To'lmagan" },
    { id: 5, name: "105-xona", status: "Bo'sh" },
    { id: 6, name: "106-xona", status: "Bo'sh" },
    { id: 7, name: "107-xona", status: "Bo'sh" },
    { id: 8, name: "108-xona", status: "Bo'sh" },
    { id: 9, name: "109-xona", status: "Bo'sh" },
    { id: 10, name: "110-xona", status: "Bo'sh" },
    { id: 11, name: "111-xona", status: "Bo'sh" },
    { id: 12, name: "112-xona", status: "Bo'sh" },
  ];
  let floors = [
    { id: 1, name: "1-qavat", type: "Yigitlar" },
    { id: 2, name: "2-qavat", type: "Qizlar" },
  ];
  return (
    <div className="container">
      <div className="  rounded-lg">
        <div className="pageTitle flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Yotoqxona</h1>
          <div className="addBtns flex justify-center items-center gap-4">
            <button className="bg-blue-600 py-2 px-2 items-center gap-2 text-white rounded">
              + Qavat qo'shish
            </button>
            <button className="bg-blue-600 py-2 px-2 items-center gap-2 text-white rounded">
              + Xona qo'shish
            </button>
          </div>
        </div>
        <div className="dormitoryFilters flex justify-start items-center gap-3">
          <h2 className="text-md flex items-center gap-1 font-regular text-gray-700">
            <CiFilter />
            Filterlar:
          </h2>
          <CreatableSelect
            className="w-36"
            placeholder="Jins"
            isClearable
            options={genderOptions}
          />
          <CreatableSelect
            className="w-36"
            placeholder="Xona holati"
            isClearable
            options={roomStatusOptions}
          />
        </div>
        <div className="floors">
          {floors?.map((floor) => {
            return (
              <Link
                to={`/floordetails/${floor.id}`}
                className="floorBlock block relative bg-white p-4 rounded mt-6 border-gray-300 border"
              >
                <span
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="absolute top-4 text-2xl rounded-full p-3 right-4 bg-white text-gray-400 cursor-pointer hover:bg-gray-200"
                >
                  <HiOutlineDotsVertical />
                </span>
                <div className="floorTitle flex justify-start items-center pb-2 mb-4">
                  <h2 className="text-xl font-semibold">{floor.name}</h2>
                  <span
                    className={`flex justify-center items-center gap-1 ml-4 px-4 py-1 rounded-full ${
                      floor.type === "Yigitlar" ? "bg-blue-100" : "bg-pink-100"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        floor.type === "Yigitlar"
                          ? "text-blue-600"
                          : "text-pink-600"
                      } font-semibold`}
                    >
                      {floor.type}
                    </p>
                  </span>
                </div>
                <div className="floorBox ">
                  <div className="roomBox flex flex-wrap gap-4">
                    {rooms?.map((room) => {
                      return (
                        <div className="px-9 py-3 border border-gray-300 rounded p-4 bg-[#f9fafb] shadow flex flex-col justify-center items-center w-fit">
                          <p className="text-md font-semibold pb-4">
                            {room.name}
                          </p>
                          <span className="bg-gray-100 flex justify-center items-center py-1 px-2 rounded-full w-fit">
                            <p className="text-sm font-semibold text-gray-700">
                              {room.status.toUpperCase()}
                            </p>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dormitory;

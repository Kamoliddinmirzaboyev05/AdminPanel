import BackButton from "@/components/ui/backbutton";
import "./FloorDetails.css";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";
function FloorDetails() {
  let rooms = [
    {
      id: 1,
      name: "101-xona",
      capacity: 5,
      students: [
        "Aliyev Alisher",
        "Kamoliddin Mirzaboyev",
        "Valiyev Alisher",
        "Azizbekov Ali",
        "Karimov Ali",
      ],
      status: "Bo'sh",
    },
    {
      id: 2,
      name: "102-xona",
      capacity: 5,
      students: [
        "Aliyev Alisher",
        "Kamoliddin Mirzaboyev",
        "Valiyev Alisher",
        "Azizbekov Ali",
        "Karimov Ali",
      ],
      status: "To'lgan",
    },
    {
      id: 3,
      name: "103-xona",
      capacity: 5,
      students: ["Aliyev Alisher", "Azizbekov Ali", "Karimov Ali"],
      status: "Bo'sh",
    },
    {
      id: 4,
      name: "104-xona",
      capacity: 5,
      students: [
        "Aliyev Alisher",
        "Kamoliddin Mirzaboyev",
        "Valiyev Alisher",
        "Azizbekov Ali",
        "Karimov Ali",
      ],
      status: "To'lmagan",
    },
    {
      id: 5,
      name: "105-xona",
      capacity: 5,
      students: [
        "Aliyev Alisher",
        "Kamoliddin Mirzaboyev",
        "Valiyev Alisher",
        "Azizbekov Ali",
        "Karimov Ali",
      ],
      status: "Bo'sh",
    },
    {
      id: 6,
      name: "106-xona",
      capacity: 5,
      students: [
        "Aliyev Alisher",
        "Kamoliddin Mirzaboyev",
        "Valiyev Alisher",
        "Azizbekov Ali",
        "Karimov Ali",
      ],
      status: "Bo'sh",
    },
    {
      id: 7,
      name: "107-xona",
      capacity: 5,
      students: [
        "Aliyev Alisher",
        "Kamoliddin Mirzaboyev",
        "Valiyev Alisher",
        "Azizbekov Ali",
        "Karimov Ali",
      ],
      status: "Bo'sh",
    },
    {
      id: 8,
      name: "108-xona",
      capacity: 5,
      students: [
        "Aliyev Alisher",
        "Kamoliddin Mirzaboyev",
        "Valiyev Alisher",
        "Azizbekov Ali",
        "Karimov Ali",
      ],
      status: "Bo'sh",
    },
    {
      id: 9,
      name: "109-xona",
      capacity: 5,
      students: [
        "Aliyev Alisher",
        "Kamoliddin Mirzaboyev",
        "Valiyev Alisher",
        "Azizbekov Ali",
        "Karimov Ali",
      ],
      status: "Bo'sh",
    },
    {
      id: 10,
      name: "110-xona",
      capacity: 5,
      students: [
        "Aliyev Alisher",
        "Kamoliddin Mirzaboyev",
        "Valiyev Alisher",
        "Azizbekov Ali",
        "Karimov Ali",
      ],
      status: "Bo'sh",
    },
    {
      id: 11,
      name: "111-xona",
      capacity: 5,
      students: [
        "Aliyev Alisher",
        "Kamoliddin Mirzaboyev",
        "Valiyev Alisher",
        "Azizbekov Ali",
        "Karimov Ali",
      ],
      status: "Bo'sh",
    },
    {
      id: 12,
      name: "112-xona",
      capacity: 5,
      students: [
        "Aliyev Alisher",
        "Kamoliddin Mirzaboyev",
        "Valiyev Alisher",
        "Azizbekov Ali",
        "Karimov Ali",
      ],
      status: "Bo'sh",
    },
  ];

  return (
    <div className="container">
      <div className=" w-full p-6 rounded-lg shadow-md">
        <div className="pageTitle flex justify-between items-center mb-6">
          <BackButton
            onClick={() => {
              window.history.back();
            }}
          />
          <div className="flex gap-4 items-center">
            <h1 className="text-2xl font-semibold">1-qavat xonalari</h1>
            <p className="text-blue-600 font-bold text-xs px-2 py-1 bg-blue-100 rounded-full">
              Yigitlar
            </p>
          </div>
          <button className="bg-blue-600 py-2 px-2 items-center gap-2 text-white rounded">
            + Qavat qo'shish
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 border-b pb-4 mb-4">
          <div className="bg-white p-4 rounded  shadow border border-gray-200">
            <p className="text-sm text-gray-700 font-semibold">Jami </p>
            <h2 className="text-xl font-bold">3</h2>
          </div>
          <div className="bg-white p-4 rounded  shadow border border-gray-200">
            <p className="text-sm text-gray-700 font-semibold">Bo'sh </p>
            <h2 className="text-xl text-[var(--mainGreen)] font-bold">3</h2>
          </div>
          <div className="bg-white p-4 rounded  shadow border border-gray-200">
            <p className="text-sm text-gray-700 font-semibold">To'lmagan </p>
            <h2 className="text-xl text-[var(--mainOrange)] font-bold">3</h2>
          </div>
          <div className="bg-white p-4 rounded  shadow border border-gray-200">
            <p className="text-sm text-gray-700 font-semibold">To'lgan </p>
            <h2 className="text-xl text-[var(--mainBlue)] font-bold">3</h2>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="filters flex overflow-hidden rounded w-fit items-center border border-gray-200 mb-6">
            <div className="roomFilter active text-center border-r w-fit border-gray-200 px-4 py-2 text-gray-700 ">
              <h2>Barchasi</h2>
            </div>
            <div className="roomFilter text-center border-r w-fit border-gray-200 px-4 py-2 text-gray-700 ">
              <h2>Bo'sh</h2>
            </div>
            <div className="roomFilter text-center border-r w-fit border-gray-200 px-4 py-2 text-gray-700 ">
              <h2>To'lmagan</h2>
            </div>
            <div className="roomFilter text-center border-r w-fit border-gray-200 px-4 py-2 text-gray-700 ">
              <h2>To'lgan</h2>
            </div>
          </div>
        </div>
        <div className="roomsBlock overflow-y-auto max-h-144 grid grid-cols-4  gap-4">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="roomCard border border-gray-200 rounded p-6 pr-3 bg-white shadow"
            >
              <div className="roomHeader flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{room.name}</h2>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm py-1 px-2 rounded-full bg-blue-50">
                    {room.students.length}/{room.capacity}
                  </span>
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="top-2 text-xl rounded-full p-1 right-4 bg-gray-100 text-gray-400 cursor-pointer hover:bg-gray-200"
                  >
                    <HiOutlineDotsVertical />
                  </span>
                </div>
              </div>
              <div className="roomDetails relative flex flex-col gap-2">
                {room.students.map((student, index) => {
                  return (
                    <Link to={`/students/${index}`} key={student} className="text-sm flex items-center gap-1 text-blue-500 font-semibold">
                      <p>{index + 1}. </p>
                      {student}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FloorDetails;

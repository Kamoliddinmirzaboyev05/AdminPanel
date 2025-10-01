import { BsTrash3 } from "react-icons/bs";

function DeleteButton() {
  return (
    <button className="flex bg-red-600 py-2 px-2 items-center gap-2 text-white rounded">
      <BsTrash3 />
      O'chirish
    </button>
  );
}

export default DeleteButton;

import { IoPencil } from "react-icons/io5";
type EditButtonProps = {
  onClick?: () => void;
};
function EditButton({ onClick }: EditButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex bg-blue-600 py-2 px-2 items-center gap-2 text-white rounded"
    >
      <IoPencil />
      Tahrirlash
    </button>
  );
}

export default EditButton;

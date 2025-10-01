import { TbArrowLeft } from "react-icons/tb";
interface backButtonProps{
  onClick?: () => void;
}
function BackButton({ onClick }: backButtonProps) {
  return (
    <button onClick={onClick} className="flex bg-gradient-to-r from-[#3a7ef4] to-[#1e50d9] py-2 px-2 items-center gap-2 text-white rounded">
      <TbArrowLeft />
      Orqaga
    </button>
  );
}

export default BackButton;

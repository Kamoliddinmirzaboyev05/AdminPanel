import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CreatableSelect from "react-select/creatable";

function Students() {
  let genderOptions = [
    { value: "erkak", label: "Erkak" },
    { value: "ayol", label: "Ayol" },
  ];
  let paymentOptions = [
    { value: "Haqdor", label: "Haqdor" },
    { value: "Qarzdor", label: "Qarzdor" },
  ];
  let roomOptions = [
    { value: "101", label: "101" },
    { value: "102", label: "102" },
  ];
  let students = [
    {
      id: 1,
      fio: "Aliyev Alisher",
      guruh: "IF-21",
      umumiy_tolov: 10000,
      yonalish: "Informatika",
      xona: 20,
    },
    {
      id: 2,
      fio: "Valiyev Alisher",
      guruh: "IF-21",
      umumiy_tolov: 10000,
      yonalish: "Informatika",
      xona: 20,
    },
    {
      id: 3,
      fio: "Hasanov Alisher",
      guruh: "IF-21",
      umumiy_tolov: 10000,
      yonalish: "Informatika",
      xona: 20,
    },
    {
      id: 4,
      fio: "Husanov Alisher",
      guruh: "IF-21",
      umumiy_tolov: 10000,
      yonalish: "Informatika",
      xona: 20,
    },
  ];
  return (
    <div className="container">
      <div className="pageTitle">
        <h1 className="text-3xl font-semibold">Talabalar</h1>
        <p className="text-md text-gray-600">
          Yotoqxonada yashovchi talabalar ro'yxati
        </p>
      </div>
      <div className="studentFilters flex gap-4 mt-6 flex-wrap">
        <CreatableSelect
          className="w-36"
          placeholder="Jins"
          isClearable
          options={genderOptions}
        />
        <CreatableSelect
          className="w-44"
          placeholder="To'lov holati"
          isClearable
          options={paymentOptions}
        />
        <CreatableSelect
          className="w-36"
          placeholder="Xona"
          isClearable
          options={roomOptions}
        />
      </div>
      <div className="studentsList border-2 mt-6">
        <h2 className="w-full text-center">Talabalar ro'yxati</h2>
        <Table className=" mt-6 bg-white">
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Ism Familiya</TableHead>
              <TableHead>Yo'nalish</TableHead>
              <TableHead>Guruh</TableHead>
              <TableHead>Umumiy to'lov</TableHead>
              <TableHead>Xona</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((s) => (
              <TableRow key={s.id}>
                <TableCell>{s.id}</TableCell>
                <TableCell>{s.fio}</TableCell>
                <TableCell>{s.yonalish}</TableCell>
                <TableCell>{s.guruh}</TableCell>
                <TableCell>{s.umumiy_tolov}</TableCell>
                <TableCell>{s.xona}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Students;

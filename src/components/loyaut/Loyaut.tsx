import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import Payments from "../../pages/payments/Payments";
import Dormitory from "../../pages/dormitory/Dormitory";
import Attendance from "../../pages/attendance/Attendance";
import Applications from "../../pages/applications/Applications";
import Reports from "../../pages/reports/Repoorts";
import Students from "../../pages/students/Students";
import Settings from "@/pages/settings/Settings";
import StudentProfile from "@/pages/studentprofile/StudentProfile";
import FloorDetails from "@/pages/floordetails/FloorDetails";

function Loyaut() {
  return (
    <div className="loyaut">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentProfile />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/dormitory" element={<Dormitory />} />
        <Route path="/floordetails/:id" element={<FloorDetails />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default Loyaut;

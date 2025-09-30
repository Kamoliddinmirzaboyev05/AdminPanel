import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import Payments from "../../pages/payments/Payments";
import Dormitory from "../../pages/dormitory/Dormitory";
import Attendance from "../../pages/attendance/Attendance";
import Applications from "../../pages/applications/Applications";
import Reports from "../../pages/reports/Repoorts";
import Students from "../../pages/students/Students";
import Settings from "@/pages/settings/Settings";

function Loyaut() {
  return (
    <div className="loyaut">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/dormitory" element={<Dormitory />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default Loyaut;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

import { TbLayoutDashboard, TbReportAnalytics } from "react-icons/tb";
import { BsPeople, BsPersonCheck, BsPersonCheckFill } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { PiBuildingOffice } from "react-icons/pi";
import { IoDocumentAttachOutline, IoDocumentTextOutline } from "react-icons/io5";
import { LuSettings } from "react-icons/lu";

const Sidebar: React.FC = () => {
  return (
    <aside>
      <div className="sidebarLinks flex flex-col gap-2">
        <NavLink to="/" className="sidebar-link">
          <TbLayoutDashboard />
          <p>Dashboard</p>
        </NavLink>
        <NavLink to="/students" className="sidebar-link">
          <BsPeople />
          <p>Students</p>
        </NavLink>
        <NavLink to="/payments" className="sidebar-link">
          <MdOutlinePayment />
          <p>To'lovlar</p>
        </NavLink>
        <NavLink to="/dormitory" className="sidebar-link">
         <PiBuildingOffice/>
          <p>Yotoqxona</p>
        </NavLink>
        <NavLink to="/attendance" className="sidebar-link">
          <BsPersonCheck />
          <p>Davomat</p>
        </NavLink>
        <NavLink to="/applications" className="sidebar-link">
          <IoDocumentTextOutline />
          <p>Arizalar</p>
        </NavLink>
        <NavLink to="/reports" className="sidebar-link">
          <TbReportAnalytics />
          <p>Hisobotlar</p>
        </NavLink>
        <NavLink to="/settings" className="sidebar-link">
          <LuSettings />
          <p>Sozlamalar</p>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;

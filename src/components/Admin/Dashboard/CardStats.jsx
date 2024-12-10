import React from "react";
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonIcon from "@mui/icons-material/Person";

const icons = {
  Artikel: <FactCheckRoundedIcon className="text-[#388E3C] text-2xl" />,
  "Kegiatan Donasi": <AttachMoneyIcon className="text-[#388E3C] text-2xl" />,
  "Kegiatan Relawan": <FactCheckRoundedIcon className="text-[#388E3C] text-2xl" />,
  Pengguna: <PersonIcon className="text-[#388E3C] text-2xl" />,
};

const CardStats = ({ title, count }) => {
  return (
    <div className="relative flex items-center bg-white shadow-lg rounded-2xl px-8 py-8">
      {/* Icon Wrapper */}
      <div className="mr-4 flex items-center justify-center bg-[#CAE8CB] rounded-full p-3">
        {icons[title]}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-gray-700 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold">{count}</p>
      </div>

      {/* Decorative Green Line */}
      <div className="absolute top-0 right-0 h-full w-2 bg-[#CAE8CB] rounded-tr-lg rounded-br-lg"></div>
    </div>
  );
};

export default CardStats;

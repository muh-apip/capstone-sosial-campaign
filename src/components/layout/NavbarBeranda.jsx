import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu"; // Import hamburger icon

const NavbarBeranda = ({ toggleSidebar }) => {
  return (
    <nav className="flex items-center justify-between bg-white border-b border-gray-200 p-4 shadow-sm">

      {/* Search Bar */}
      <div className="flex items-center w-full max-w-lg">
        <div className="relative w-full">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Icons and Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button className="relative text-gray-500 hover:text-gray-700 focus:outline-none">
          <NotificationsOutlinedIcon className="h-6 w-6" />
        </button>

        {/* Help Icon */}
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <HelpOutlineIcon className="h-6 w-6" />
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/32"
            alt="Profile"
            className="h-8 w-8 rounded-full border border-gray-300"
          />
          <span className="text-sm font-medium text-gray-700">Fadhila Amalia</span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBeranda;

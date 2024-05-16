import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav__item" to="/">
        Home
      </Link>

      <Link className="nav__item" to="/questions">
        Questions
      </Link>

      <Link className="nav__item" to="/questions/register">
        Register
      </Link>
    </div>
  );
};

export default Nav;

// import { BottomNavigation, BottomNavigationAction } from "@mui/material";
// import LeaderboardIcon from "@mui/icons-material/Leaderboard";
// import HomeIcon from "@mui/icons-material/Home";
// import HiveIcon from '@mui/icons-material/Hive';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "./Nav.scss";
// import Box from "@mui/material/Box";

// type NavProps = {
//   navActionIndex: number;
// };

// const Navigation = ({ navActionIndex = 0 }: NavProps) => {
//   const [value, setValue] = useState(navActionIndex);
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         position: "fixed",
//         bottom: 0,
//       }}
//     >
//       <BottomNavigation
//         className="bottom-navigation"
//         showLabels
//         value={value}
//         onChange={(_, newValue) => {
//           setValue(newValue);
//         }}
//       >
//         <BottomNavigationAction
//           className="bottom-navigation__item"
//           icon={<HomeIcon />}
//           label="Home"
//           component={Link}
//           to="/"
//         />
//         <BottomNavigationAction
//           className="bottom-navigation__item"
//           label="Practice"
//           icon={<HiveIcon  />}
//           component={Link}
//           to="/questions"
//         />
//         <BottomNavigationAction
//           className="bottom-navigation__item"
//           label="Leaderboard"
//           icon={<LeaderboardIcon />}
//           component={Link}
//           to="/leaderboard"
//         />

//         <BottomNavigationAction
//           className="bottom-navigation__item"
//           label="Profile"
//           icon={<AccountCircleIcon />}
//           component={Link}
//           to="/user"
//         />
//       </BottomNavigation>
//     </Box>
//   );
// };
// export default Navigation;
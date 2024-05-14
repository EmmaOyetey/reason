import "./Header.scss";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

type HeaderProps = {
  subtitle: string;
  date?: string;
};

const Header = ({ subtitle, date }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__content">
        
        <div className="header__title-wrapper">
          <h4 className="header__title-div--title">
            REASON
          </h4>
          <div className="header__subtitle-date-wrapper">
            <h1 className="header__title-div--subtitle">
              {subtitle}
            </h1>
            <h6 className="header__title-div--date">
              {date}
            </h6>
          </div>
        </div>
        <div className="header__image-div">
          <Link to="/profile">
            <AccountCircleIcon
              className="header__image-div--image"
              component={AccountCircleIcon}
              aria-label="profile picture link"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
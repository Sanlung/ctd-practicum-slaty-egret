import Logo from "./Logo";
import LogoutButton from "./LogoutButton";

const Header = ({isHome}) => (
  <header>
    <Logo />
    {!isHome && <LogoutButton />}
  </header>
);

export default Header;

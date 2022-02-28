import Logo from "./Logo";
import LogoutButton from "./LogoutButton";

const Header = ({isHome}) => (
  <header>
    <nav>
      <Logo />
      {!isHome && <LogoutButton />}
    </nav>
  </header>
);

export default Header;

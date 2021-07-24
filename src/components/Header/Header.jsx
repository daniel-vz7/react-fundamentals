import Logo from "../Logo/Logo";
import Button from "../Button/Button";

function Header() {
  return (
    <div className="header">
      <Logo/>
      <div className="right-side">
        <span className="user">
          Daniel
        </span>
        <Button title="Logout"/>
      </div>
    </div>
  );
}

export default Header;
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <Link to={"/"} data-testid={"link-main"}>
        main
      </Link>
      <Link to={"/about"} data-testid={"link-about"}>
        about
      </Link>
      <Link to={"/users"} data-testid={"link-users"}>
        users
      </Link>
    </header>
  );
}

export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link> {' '}
        <Link to="/todo">To-Do-List</Link>{' '}
      </ul>
    </nav>
  );
};

export default Navbar;

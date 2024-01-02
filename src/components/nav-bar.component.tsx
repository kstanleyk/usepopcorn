import Logo from "./logo.component";
import NumResults from "./num-results.component";
import Search from "./search.component";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
}

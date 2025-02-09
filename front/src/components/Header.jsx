import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <Link to="/">BallStats</Link>
        </div>
      
        <nav className="main-nav">
          <ul>
            <li><Link to="/users">Onglet1</Link></li>
            <li><Link to="/users">Onglet2</Link></li>
            <li><Link to="/users">Onglet3</Link></li>
            <li><Link to="/users">Onglet4</Link></li>
          </ul>
        </nav>

        <div className="btns">
          <Link className="btn orange" to="/login">Connexion</Link>
          <Link className="btn white" to="/register">Inscription</Link>
        </div>
        
        

      </div>
    </header>
  );
};

export default Header;

import fitMeLogo from "../fitmelogo.png";

export default function Header() {

  return (
    <nav className="header"> 

      <div className="left-header">
        <div className="img-logo-header">
          <img src={fitMeLogo} alt=""/>
          <p className="logo-title" >FitMe</p>
        </div>
        <ul className="nav-header">
          <li><a href="/home">Home</a></li>
          <p>|</p>
          <li><a href="#">Sus</a></li>
          <p>|</p>
          <li><a href="#">About</a></li>
        </ul>
      </div>
      <div className="right-header">
        <button className="login">Log in</button>
        <button className="trynow">Try it Now</button>
      </div>

    </nav>
  
  );

}
  
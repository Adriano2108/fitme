export default function Header() {

  return (
    <div className="header"> 

      <div className="left-header">
        <div className="img-logo-header">
          <img srcSet='/assets/fitmelogo.png' alt=""/>
          <p className="logo-title" >FitMe</p>
        </div>
        <ul className="nav-header">
          <li><a href="">Home</a></li>
          <p>|</p>
          <li><a href="">Sustainability</a></li>
          <p>|</p>
          <li><a href="">About</a></li>
        </ul>
      </div>
      <div className="right-header">
        <button className="login">Log in</button>
        <button className="trynow">Try it Now</button>
      </div>

    </div>
  
  );

}
  
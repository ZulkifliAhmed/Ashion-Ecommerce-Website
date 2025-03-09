import LogoImg from "../../assets/logo.png";

function Logo() {
  return (
    <div className="logo">
    <a href="/">
      <img src={LogoImg} alt={LogoImg} />
    </a>
  </div>
  )
}

export default Logo;

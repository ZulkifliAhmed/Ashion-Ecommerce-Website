

function HeroCard(props) {
  return (
    <div className="hero_card">
      <div className="text">
        <h2>{props.titel}</h2>
        <h5>{props.text}</h5>
        <a href="/" className="hero_btn">shop now</a>
      </div>
    </div>
  );
}

export default HeroCard;

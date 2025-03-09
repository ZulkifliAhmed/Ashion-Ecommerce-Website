import HeroCard from "./heroCard";

import "./hero.css";

function Hero(props) {
  return (
    <div className="hero">
      <div className="left_hero">
        <h1>
          Women’s <br /> fashion
        </h1>
        <p>
          Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
          incidid-unt labore edolore magna aliquapendisse ultrices gravida.
        </p>
        <div>
          <a href="/" className="hero_btn">
            shop now
          </a>
        </div>
      </div>

      <div className="right_hero">
        <div className="box box1">
          <HeroCard titel="Men’s fashion" text="358 items" />
          <HeroCard titel="Kid’s fashion" text="273 items" />
        </div>
        <div className="box box2">
          <HeroCard titel="Cosmetics" text="159 items" />
          <HeroCard titel="Accessories" text="792 items" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

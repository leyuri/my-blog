import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile4.png"
          alt="An image showing Yuri"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Yuri</h1>
      <p>
        I blog about web development - especially fronted frameworks like
        Angular or React
      </p>
    </section>
  );
};

export default Hero;

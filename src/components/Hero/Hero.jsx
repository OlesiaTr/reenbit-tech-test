// Styles
import { Img } from './Hero.styled';

// Images
import heroDesk1x from '../../assets/imgs/hero-desk-x1.png';
import heroMob1x from '../../assets/imgs/hero-mob-x1.png';
import heroDesk2x from '../../assets/imgs/hero-desk-x2.png';
import heroMob2x from '../../assets/imgs/hero-mob-x2.png';

export const Hero = () => {
  return (
    <picture>
      <source
        srcSet={`${heroDesk1x} 1x, ${heroDesk2x} 2x`}
        media="(min-width: 768px)"
      />
      <source
        srcSet={`${heroMob1x} 1x, ${heroMob2x} 2x`}
        media="(min-width: 320px)"
      />
      <Img src="imgs/hero-mob-x1.png" alt="Rick and Morty banner" />
    </picture>
  );
};

export default Hero;

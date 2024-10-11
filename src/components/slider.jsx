import Slider from "react-slick";
import homeImage from "../files/yak.png";
import bottle from "../files/bottle.png";
import duotone from "../files/duotone.jpg";
import advert from "../files/advert.png";
import "../components/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="slide">
          <div>
            <img src={homeImage} alt="illustration" />
          </div>
        </div>
        <div className="slide">
          <div>
            <img src={bottle} alt="illustration" />
          </div>
        </div>
        <div className="slide">
          <div>
            <img src={duotone} alt="illustration" />
          </div>
        </div>
        <div className="slide">
          <div>
            <img src={advert} alt="illustration" />
          </div>
        </div>
      </Slider>
    </>
  );
}

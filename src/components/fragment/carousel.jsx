import Slider from "react-slick";
import banner1 from "/img/Banner.png";
import banner2 from "/img/Banner 2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className=" max-w-6xl mx-auto">
      <Slider {...settings}
        className="relative px-4 lg:px-0 mt-5 lg:mt-10 sm:mt-6"
      >
        <div className="card">
          <img src={banner1} alt="image 1" />
        </div>
        <div className="card">
          <img src={banner2} alt="image 2" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-[#F6F6F6] px-6">
          <div className="">
            <div className="text-6xl font-bold">
              En Kaliteli,Markalı Ayakkabılar Burada!!!
            </div>
            <div className=" text-lg my-4">
              Tüm Ayakkabı Ürünlerimizde %50 Varan İndirimler!!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl flex items-center justify-center bg-gray-200 w-[200px] h-14">
              İncele
            </div>
          </div>
          <img
            height={400}
            width={500}
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4a698d4b-5db7-4dc4-b2a1-d9962287accc/AIR+MAX+DN.png"
            alt="Nike Air Max DN Ayakkabı"
          />
        </div>
        <div className="!flex items-center bg-[#F6F6F6] px-6">
          <div className="">
            <div className="text-6xl font-bold">
              En Kaliteli, Markalı Ayakkabılar Burada!!!
            </div>
            <div className=" text-lg my-4">
              Tüm Ayakkabı Ürünlerimizde %50 Varan İndirimler!!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl flex items-center justify-center bg-gray-200 w-[200px] h-14">
              İncele
            </div>
          </div>
          <img
            height={400}
            width={500}
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/96d373e5-fe14-4ab8-8579-030e21713dcb/NIKE+AIR+MAX+PLUS+PRM.png"
            alt="Nike Air Max Plus Premium Erkek Ayakkabısı"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;

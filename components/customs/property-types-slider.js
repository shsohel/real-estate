// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';

import apartment from '@/images/icons/apppartement.png';
import { propertiesTypes } from '@/data';

const PropertyTypeSlider = (props) => {
  const { slidesView, navigation = false } = props;

  const sliderSettings = {
    440: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={slidesView}
      navigation={navigation}
      // navigation={{
      //   prevEl: '.prev',
      //   nextEl: '.next',
      // }}
      pagination={{
        clickable: true,
      }}
      // scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      style={{}}
      // breakpoints={sliderSettings}
    >
      {propertiesTypes.map((type, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="col-span-1">
              <div className="hover:shadow-md rounded-sm w-[190px] h-[190px] flex flex-col justify-center items-center p-5">
                <div
                  className="w-[80px] h-[80px] p-2"
                  style={{
                    backgroundImage: `url(${type.icon})`,
                    backgroundPosition: 'center center',
                    backgroundSize: '80px 80px',
                  }}
                ></div>
                <h2 className="font-medium text-[#333] mt-2 ">
                  {type.iconFor}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        );
      })}

      <div className="h-10 mb-2"></div>
    </Swiper>
  );
};
const CSlider = (props) => {
  const { products } = props;
  return (
    <div>
      <div className=" grid-cols-4 hidden lg:grid xl:hidden my-4 gap-2">
        <div className="text-dark col-span-4 ">
          <PropertyTypeSlider slidesView={3} navigation={true} />
        </div>
      </div>
      <div className=" grid-cols-4 hidden xl:grid my-4 gap-2">
        <div className="text-dark col-span-4 ">
          <PropertyTypeSlider slidesView={4} navigation={true} />
        </div>
      </div>
      <div className=" grid-cols-2 hidden md:grid lg:hidden my-4 gap-2">
        <div className="text-dark col-span-2 ">
          <PropertyTypeSlider slidesView={2} />
        </div>
      </div>
      <div className="grid grid-cols-1  md:hidden my-4 gap-2">
        <div className="text-dark">
          <PropertyTypeSlider slidesView={2} />
        </div>
      </div>
    </div>
  );
};

export default CSlider;

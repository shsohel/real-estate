// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import destinationImage from '@/images/properties-city-01.jpg';

import apartment from '@/images/icons/apppartement.png';
import { propertiesTypes } from '@/data';
import Image from 'next/image';

const Slider = (props) => {
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
      // navigation={navigation}
      // navigation={{
      //   prevEl: '.prev',
      //   nextEl: '.next',
      // }}
      // pagination={{
      //   clickable: true,
      // }}
      // scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      style={{}}
      // breakpoints={sliderSettings}
    >
      {[2, 5, 5, 5, 5, 7].map((type, index) => {
        return (
          <SwiperSlide key={index}>
            <div className=" overflow-hidden max-w-[280px] relative bg-black">
              <Image
                className="hover:scale-125 hover:opacity-75 transition duration-700 cursor-pointer  object-cover  hover:rounded"
                src={destinationImage?.src}
                alt="City 01"
                width={280}
                height={272}
              />
              <div className="absolute bottom-4 right-0 left-0 max-w-[250px] px-3">
                <h2 className="text-lg font-medium">New York</h2>
                <p className="text-sm">
                  From
                  <span className="text-sm font-medium pl-1">
                    $522220 - $655444
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}

      <div className="h-10 mb-2"></div>
    </Swiper>
  );
};
const DestinationSlider = (props) => {
  const { products } = props;
  return (
    <div>
      <div className=" grid-cols-4 hidden lg:grid xl:hidden my-4 gap-2">
        <div className=" col-span-4 ">
          <Slider slidesView={3} navigation={true} />
        </div>
      </div>
      <div className=" grid-cols-4 hidden xl:grid my-4 gap-2">
        <div className=" col-span-4 ">
          <Slider slidesView={4} navigation={true} />
        </div>
      </div>
      <div className=" grid-cols-2 hidden md:grid lg:hidden my-4 gap-2">
        <div className=" col-span-2 ">
          <Slider slidesView={2} />
        </div>
      </div>
      <div className="grid grid-cols-1  md:hidden my-4 gap-2">
        <div className="">
          <Slider slidesView={2} />
        </div>
      </div>
    </div>
  );
};

export default DestinationSlider;

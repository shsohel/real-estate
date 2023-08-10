// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';

import { partnerData } from '@/data';
import Image from 'next/image';

const PSlider = (props) => {
  const { slidesView, navigation = false } = props;

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
      // pagination
      // scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      style={{}}
      // breakpoints={sliderSettings}
    >
      {partnerData.map((partner, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="group flex justify-center items-center border px-2 py-4">
              <Image
                width={100}
                height={100}
                className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 w-30 h-20 "
                src={partner.image}
                alt="Partner O1"
              />
            </div>
          </SwiperSlide>
        );
      })}

      <div className="h-10 mb-2"></div>
    </Swiper>
  );
};
const PartnerSlider = () => {
  return (
    <div>
      <div className=" grid-cols-5 hidden lg:grid xl:hidden  gap-2">
        <div className="text-dark col-span-5  ">
          <PSlider slidesView={5} navigation={true} />
        </div>
      </div>
      <div className=" grid-cols-6 hidden xl:grid  gap-2 ">
        <div className="text-dark col-span-6 ">
          <PSlider slidesView={6} navigation={true} />
        </div>
      </div>
      <div className=" grid-cols-3 hidden md:grid lg:hidden  gap-2">
        <div className="text-dark col-span-3 ">
          <PSlider slidesView={3} />
        </div>
      </div>
      <div className="grid grid-cols-1  md:hidden  gap-2">
        <div className="text-dark  col-span-1 ">
          <PSlider slidesView={2} />
        </div>
      </div>
    </div>
  );
};

export default PartnerSlider;

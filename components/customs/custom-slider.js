// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';

import { Card, CardContent, CardFooter } from '../ui/card';
import {
  ArrowRightLeftIcon,
  BathIcon,
  BedDoubleIcon,
  Heart,
  ParkingCircleIcon,
  SquareAsterisk,
  DiamondIcon,
} from 'lucide-react';
import { CustomTooltip } from './tooltip';
import { useRef } from 'react';

export default function CustomSlider(props) {
  const { slidesView, products } = props;

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
      navigation
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
      {products.map((product, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="animate__animated animate__zoomIn">
              <Card className="w-auto text-dark">
                <CardContent className="p-0">
                  <div
                    className="h-56"
                    style={{
                      backgroundImage: `url(${
                        product?.images?.find((image) => image.default)?.src ??
                        ''
                      })`,
                      backgroundPosition: 'center center',
                      backgroundSize: 'cover',
                    }}
                  ></div>
                  <div className="p-4">
                    <h2 className="card-title fs-16 lh-2 mb-0">
                      <a
                        href="/single-property-1.html"
                        className="text-dark hover-primary"
                      >
                        {product.title}
                      </a>
                    </h2>
                    <p className="text-sm font-medium text-gray-400 mb-2">
                      {product.address}
                    </p>
                    <ul className=" flex mb-0 flex-wrap mr-n5">
                      {product.attributes.map((attr, indexAttr) => {
                        return (
                          <li
                            key={indexAttr}
                            className="text-gray-400 text-sm font-medium  flex items-center mr-5"
                          >
                            <span className="text-primary mr-2">
                              {attr.name === 'Bed' ? (
                                <BedDoubleIcon className="w-5" />
                              ) : attr.name === 'Bathroom' ? (
                                <BathIcon className="w-5" />
                              ) : attr.name === 'Square Feet' ? (
                                <SquareAsterisk className="w-5" />
                              ) : attr.name === 'Garage' ? (
                                <ParkingCircleIcon className="w-5" />
                              ) : (
                                <DiamondIcon className="w-5" />
                              )}
                            </span>
                            <span>{`${attr.value} ${attr.shortCode}`}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-2">
                  <p className="text-base font-bold text-dark mb-0">
                    {`${product.currencySign} ${product.price.toFixed(2)}`}
                  </p>
                  <div className="flex gap-3">
                    <CustomTooltip title="Wishlist">
                      <div className="rounded-full border p-2">
                        <Heart className="w-5 h-5 text-gray-500" />
                      </div>
                    </CustomTooltip>
                    <CustomTooltip title="Compare">
                      <div className="rounded-full border p-2">
                        <ArrowRightLeftIcon className="w-5 h-5  text-gray-500" />
                      </div>
                    </CustomTooltip>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </SwiperSlide>
        );
      })}

      <div className="h-10 mb-2"></div>
    </Swiper>
  );
}

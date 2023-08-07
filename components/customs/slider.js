import React from 'react';
import CustomSlider from './custom-slider';

const Slider = (props) => {
  const { products } = props;
  return (
    <div>
      <div className=" grid-cols-4 hidden lg:grid xl:hidden my-4 gap-6">
        <div className="text-dark col-span-4 ">
          <CustomSlider products={products} slidesView={3} />
        </div>
      </div>
      <div className=" grid-cols-4 hidden xl:grid my-4 gap-6">
        <div className="text-dark col-span-4 ">
          <CustomSlider products={products} slidesView={4} />
        </div>
      </div>
      <div className=" grid-cols-2 hidden md:grid lg:hidden my-4 gap-6">
        <div className="text-dark col-span-2 ">
          <CustomSlider products={products} slidesView={2} />
        </div>
      </div>
      <div className="grid grid-cols-1  md:hidden my-4 gap-6">
        <div className="text-dark">
          <CustomSlider products={products} slidesView={1} />
        </div>
      </div>
    </div>
  );
};

export default Slider;

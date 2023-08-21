import Image from 'next/image';
import React from 'react';
import logo from '@/images/icons/Linkcaps-Landscap.png';
import slogo from '@/images/icons/Linkcaps-logo.png';
import logo2 from '@/images/logo.png';
const Logo = () => {
  return (
    <div className="flex space-x-2 ">
      {/* <Image
        priority
        className="h-8 w-auto border-2"
        src={slogo}
        alt="Linkcaps Logo"
      /> */}
      <Image priority className="h-8 w-auto" src={logo2} alt="Linkcaps Logo" />
    </div>
  );
};

export default Logo;

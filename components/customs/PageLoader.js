import React from 'react';
import Logo from './Logo';

const PageLoader = () => {
  return (
    <div className="grid min-h-screen items-center  justify-center bg-white">
      <div className="animate-pulse">
        <Logo />
      </div>
    </div>
  );
};

export default PageLoader;

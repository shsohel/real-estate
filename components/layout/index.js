import React, { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import { ArrowBigUpIcon, ArrowUpIcon } from 'lucide-react';

const Layouts = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const backTop = () => {
    window.scroll({ behavior: 'smooth', top: 0 });
  };

  // Show Button After Scrolling Down More than 500px
  const toggleVisible = () => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    // Listen for Scrolling Event
    window.addEventListener('scroll', toggleVisible, false);
    return () => {
      window.removeEventListener('scroll', toggleVisible, false);
    };
  }, []);

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      {visible && (
        <button
          type="button"
          onClick={() => {
            backTop();
          }}
          className="fixed bottom-16 right-4 inline-block rounded-full bg-primary p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-lg focus:bg-rose-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-800 active:shadow-lg lg:bottom-5"
          id="btn-back-to-top"
        >
          <ArrowUpIcon width={25} />
        </button>
      )}
    </div>
  );
};

export default Layouts;

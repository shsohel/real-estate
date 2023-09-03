import Image from 'next/image';
import React from 'react';
import logo from '@/images/logo-white.png';
import Link from 'next/link';
import {
  FacebookIcon,
  Linkedin,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-dark min-h-[200px]">
      <div className="container pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <div className="px-2 ">
            <Image
              className=" h-8 w-auto mb-2"
              width={200}
              height={90}
              src={logo?.src}
              alt="Workflow"
            />
            <ul className="text-txt-mute text-sm font-medium flex flex-col gap-3">
              <li>58 Howard Street #2 San Francisco</li>
              <li className="text-white">contact@homeid.com</li>
              <li>(+68)1221 09876</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h2>Sign Up for Our Newsletter</h2>
            <p className="text-txt-mute text-sm py-3">
              Lorem ipsum dolor sit amet, consecte tur cing elit. Suspe ndisse
              suscipit sagittis
            </p>
            <div className="relative flex   py-8">
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-s border border-r-0 border-primary py-3 pl-12 pr-3 text-primary focus:border-secondary-light focus:outline-none focus:ring-0"
              />
              <button className=" rounded-e bg-primary px-6 font-roboto text-sm uppercase text-white  transition hover:border  hover:border-primary hover:bg-transparent hover:bg-secondary  hover:text-white dark:hover:bg-white  dark:hover:text-primary">
                Subscribe
              </button>
            </div>
            <div className="text-txt-mute flex justify-center md:justify-start  gap-4">
              <TwitterIcon
                width={20}
                className="h-auto w-auto hover:text-light cursor-pointer"
              />
              <FacebookIcon
                width={20}
                className="h-auto w-auto hover:text-light  cursor-pointer "
              />
              <LinkedinIcon
                width={20}
                className="h-auto w-auto hover:text-light cursor-pointer"
              />
              <YoutubeIcon
                width={20}
                className="h-auto w-auto hover:text-light cursor-pointer"
              />
            </div>
          </div>
        </div>
        {/* footer nav */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-content-between text-txt-mute text-xs">
          <div className="flex gap-6 justify-center md:justify-start ">
            <Link href="/" className="hover:text-light">
              Term of Use
            </Link>
            <Link href="/" className="hover:text-light">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-light">
              Contact
            </Link>
          </div>
          <div>
            <p className="text-center md:text-end">© 2020 homeID. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

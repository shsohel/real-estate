import { Disclosure, Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { Bars3Icon, HeartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { BellIcon } from '@radix-ui/react-icons';
import { NavMenu, NavigationMenuDemo } from '../customs/nav-menu';
import Image from 'next/image';
import logo from '@/images/logo-white.png';
import logo2 from '@/images/logo.png';
import { SelectOption } from '../customs/select-option';
import { Heart, HeartPulseIcon } from 'lucide-react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/auth/actions";

const Header = ({ title, show, isFromOtherPage }) => {
  const dispatch = useDispatch();
  const { authUser } = useSelector(({ auth }) => auth);

  const router = useRouter();

  const handleAddListing = () => {
    router.push("/dashboard/add-listing");
  };
  const gotoSignIn = () => {
    router.push("/auth/login");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  console.log("show", JSON.stringify(show, null, 2));

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <Head>
            <title>{title}</title>
            <meta name="description" content="Hire a Front-End Developer" />
            <meta
              name="description"
              content="Front-End Developer, React Developer, Javascript Developer, UI DESIGNER"
            />

            <link rel="icon" href="/favicon.ico" />

            {/* <title>Your Title Goes Here</title>
          <meta name="description" content="Your description goes here"/>

          <img src="url" alt="Your image description goes here"></img>
          <meta name="og:title" property="og:title" content="Your Open Graph Title Goes Here"></meta>
          <meta name="robots" content="index, follow"></meta>
          <link href="URL" rel="canonical"></link> */}
          </Head>
          <div
            className={`mx-auto px-4 md:px-6 lg:px-24 py-2 bg-none fixed  z-40 w-full transition-all duration-1000  hidden md:block 
            ${show && "bg-white text-dark shadow-2xl border-b-0 "}
            
            ${isFromOtherPage && "bg-white text-dark border-b "}
            `}
          >
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    className="block lg:hidden h-8 w-auto"
                    src={show ? logo2 : logo}
                    alt="Workflow"
                  />
                  <Image
                    className="hidden lg:block h-8 w-auto"
                    src={show ? logo2 : logo}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <NavMenu />
                </div>
              </div>
              <div className="hidden md:ml-6 md:flex md:items-center ">
                <div className="divide-x  flex items-center">
                  <SelectOption />
                  <div className="relative group ">
                    <button
                      hidden={authUser}
                      onClick={() => {
                        gotoSignIn();
                      }}
                      className="ml-3 uppercase text-sm"
                    >
                      Sign In
                    </button>
                    <button
                      hidden={!authUser}
                      onClick={() => {
                        handleLogout();
                      }}
                      className="ml-3 uppercase text-sm"
                    >
                      Logout
                    </button>
                  </div>
                </div>
                <div className="mx-4">
                  <button className="relative ">
                    <Heart className="" size={24} />
                    <span className="absolute -right-2 -top-1 h-4 w-4 rounded-full  bg-primary  text-center text-xs text-white dark:border-white ">
                      2
                    </span>
                  </button>
                </div>
                <div className="mx-4 border py-3 px-6 rounded hover:bg-primary hover:border-0">
                  <button
                    className="relative "
                    onClick={() => {
                      handleAddListing();
                    }}
                  >
                    Add Listing
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex justify-between items-center md:hidden p-2 fixed w-full bg-white z-50">
            <div>
              <Image
                className="h-8 w-auto"
                src={logo2}
                // width={20}
                // height={20}
                alt="Workflow"
              />
            </div>
            <Disclosure.Button className="inline-flex  items-center justify-center  p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>

          <Disclosure.Panel className="md:hidden bg-secondary fixed w-full mt-14 z-50 ">
            <div className=" p-3 space-y-1 transition-all duration-1000">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}

              <Disclosure.Button
                as="a"
                href="#"
                className="  block pl-3 pr-4 py-2  text-base font-medium"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Properties
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Calendar
              </Disclosure.Button>
            </div>
            <div className="pt-4 p-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <Image
                    className=" rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium ">Tom Cook</div>
                  <div className="text-sm font-medium text-gray-500">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;

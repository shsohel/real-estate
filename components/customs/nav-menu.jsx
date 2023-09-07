import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const navigation = [
  {
    id: 1,
    name: "Home",
    isActive: true,
    link: "/",
    children: [],
  },
  {
    id: 2,
    name: "Demo",
    isActive: false,
    link: "/",

    children: [
      {
        id: 1,
        name: "Home 01",
        isActive: false,
        link: "/",
      },
      {
        id: 2,
        name: "Home 02",
        isActive: false,
        link: "/",
      },
      {
        id: 3,
        name: "Home 03",
        isActive: false,
        link: "/",
      },
    ],
  },
];
export function NavMenu() {
  return (
    <>
      {navigation.map((menu, menuIndex) => {
        return (
          <div
            key={menuIndex}
            className="group relative cursor-pointer py-1   "
          >
            <div className="flex items-center justify-between  px-2 hover:border-b-2 border-primary ">
              <Link
               className="menu-hover  p-1 text-sm font-normal "
               href={menu.link}
              >
              {menu.name}
              </Link>
              {/* <a className="menu-hover  p-1 text-sm font-normal ">
               
              </a> */}
              <span hidden={!menu.children.length}>
                <ChevronDown width={20} />
              </span>
            </div>
            {menu.children.length > 0 && (
              <div className="invisible rounded absolute z-50 flex w-[10rem] flex-col bg-white mt-2 py-4 shadow-xl group-hover:visible transition-all divide-y">
                {menu.children.map((child, childIndex) => {
                  return (
                    <a
                      key={childIndex}
                      className={` block  py-1 text-sm px-2  text-black hover:bg-gray-100  ${child.isActive && "bg-primary text-white"
                        }`}
                    >
                      {child.name}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

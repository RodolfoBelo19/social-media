import Image from "next/image";
import logo from "../assets/Facebook.png";

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon
} from "@heroicons/react/outline";

import { HeaderIcon } from "./HeaderIcon";

export function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image
          width={40}
          height={40}
          layout="fixed"
          src={logo}
          alt="logo"
        />
        <div className="mx-2 flex rounded-full bg-gray-100 p-2">
          <SearchIcon className="text-gray-400 h-6" />
          <input className="flex mx-2 placeholder-gray-400 outline-none bg-transparent flex-shrink" type="text" placeholder="Search Facebook" />
        </div>
      </div>


      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* right */}

    </div>
  )
}
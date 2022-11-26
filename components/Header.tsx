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
} from "@heroicons/react/outline"

export function Header() {
  return (
    <div>
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
          <input className="flex mx-2 placeholder-gray-400 outline-none bg-transparent" type="text" placeholder="Search Facebook" />
        </div>
      </div>


      {/* center */}

      {/* right */}

    </div>
  )
}
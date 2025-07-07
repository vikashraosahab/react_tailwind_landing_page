import { FiMenu } from "react-icons/fi";
export function HeaderComponent () {
    return (
        <div className="flex flex-row items-center justify-between text-[25px]">
          <div className="gap-x-5 flex flex-row items-end">
           <img src="../public/assets/Logo.svg" alt="logo" />
           <p className="text-sm bg-linear-to-r/shorter from-yellow-500 to-red-400 px-2 py-1 rounded-[20px] text-white">Hoster is hiring</p>
          </div>
          <ul className="flex flex-row items-center justify-between  max-md:hidden lg:gap-x-5 invisible  lg:visible">
            <li><a href='#' className="text-sm">Plans</a></li>
            <li><a href='#' className="text-sm">Find Domain</a></li>
            <li><a href='#' className="text-sm">Why Hoster</a></li>
          </ul>
          <div className="lg:flex lg:flex-row lg:justify-around lg:gap-x-5  hidden lg:block">
            <button className="text-center text-gray-500 text-sm">Sign In</button>
            <button className="h-10 p-1 bg-blue-300 active:bg-blue-500 hover:bg-blue-500 w-25 text-center text-white text-sm rounded-[5px]">Join Waitlist</button>
          </div>
          <FiMenu className="lg:hidden"/>
        </div>
    )
}
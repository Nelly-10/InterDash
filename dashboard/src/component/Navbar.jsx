import { useEffect } from "react";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";

import { Cart, Chat, Notification, UserProfile } from '.';
import avatar from "../data/avatar.jpg";


const NavButton = ({ title, icon, customFunc, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" style={{ color }}
      onClick={customFunc}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span style={{ dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
        {icon}
    </button>
  </TooltipComponent>
)



const Navbar = () => {
  const { activeMenu, setActiveMenu, currentColor, isClicked, handleClick, screenSize, setScreenSize } = useStateContext();

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

   useEffect(()=> {
      const handleResize = ()=> setScreenSize(window.innerWidth);
      
      window.addEventListener('resize', handleResize);

      handleResize();

      return ()=> window.removeEventListener('resize', handleResize)
  }, []);

  useEffect(()=> {
    if (screenSize <= 900) {
        setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize]);
  
  

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton icon={<AiOutlineMenu />} title="Menu" color={currentColor} customFunc={handleActiveMenu} />

      <div className="flex">
        <NavButton icon={<FiShoppingCart />} title="Menu" color={currentColor} customFunc={()=> handleClick('cart')} dotColor={currentColor} />

        <NavButton icon={<BsChatLeft />} title="Menu" color={currentColor} customFunc={()=> handleClick('chat')} dotColor={currentColor} />

        <NavButton icon={<RiNotification3Line />} title="Menu" color={currentColor} customFunc={()=> handleClick('notification')} dotColor={currentColor} />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div 
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={()=> handleClick('userProfile')}
          >
            <img src={avatar} alt="" className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">NELSON</span>
            </p>
            <MdKeyboardArrowDown />
          </div>
        </TooltipComponent>

        {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
      </div>
    </div>
  )
}

export default Navbar;
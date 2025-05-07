import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';



const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  // const activeMenu = true;

  const handleCloseSideBar = ()=> {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }

  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-black  text-md m-2';

  return (
    <div className='ml-3 h-screen md:hover:overflow-auto  md:overflow-hidden overflow-auto'>
      {
        activeMenu && (<>
          <div className='flex items-center justify-between'>
            <Link to='/' className='mt-4 ml-3 flex items-center gap-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
            onClick={handleCloseSideBar}
            >
              <SiShopware />
              <span>Shoppy</span>
            </Link>

            <TooltipComponent content='Menu' position='BottomCenter'>
              <button type='button' onClick={()=> setActiveMenu((prevActiveMenu)=> !prevActiveMenu)} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className='mt-10'>
            {
              links.map((item) => (
                <div key={item.title}>
                  <p className='mt-4 m-3 uppercase text-xl text-gray-400mt-4 text-gray-400'
                  >{item.title}
                  </p>
                  {
                    item.links.map((link) => (
                      <NavLink to={`/${link.name}`}
                        className={({ isActive }) => isActive ? activeLink : normalLink}
                        key={link.name}
                        onClick={handleCloseSideBar}
                      >
                        {link.icon}
                        <span className='capitalize'>{link.name}</span>
                      </NavLink>
                    ))
                  }
                </div>
              ))
            }
          </div>
        </>)
      }
    </div>
  )
}

export default Sidebar;








// import React from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import { SiShopware } from 'react-icons/si';
// import { MdOutlineCancel } from 'react-icons/md';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';
// import { links } from '../data/dummy';
// import { useStateContext } from '../contexts/ContextProvider';


// const Sidebar = () => {
//   const { activeMenu, setActiveMenu } = useStateContext();
//   // const activeMenu = true;

//   const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
//   const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-black  text-md m-2';

//   return (
//     <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto'>
//       {
//         activeMenu && (<>
//           <div className='flex items-center justify-between'>
//             <Link to={'/'} onClick={() => setActiveMenu(false)} `className='mt-4 ml-3 flex items-center gap-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-900'`>
//               <SiShopware />
//               <span>Shoppy</span>
//             </Link>

//             <TooltipComponent content='Menu' position='BottomCenter'>
//               <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
//                 <MdOutlineCancel />
//               </button>
//             </TooltipComponent>
//           </div>
//           <div className='mt-10'>
//             {
//               links.map((item) => (
//                 <div>
//                   <p key={item.title}
//                     className='mt-4 m-3 uppercase text-xl text-gray-400mt-4  text-gray-400'
//                   >{item.title}
//                   </p>
//                   {
//                     item.links.map((link) => (
//                       <NavLink to={`/${link.name}`}
//                         key={link.name}
//                         className={({ isActive }) => isActive ? activeLink : normalLink}
//                       >
//                         {link.icon}
//                         <span>{link.name}</span>
//                       </NavLink>
//                     ))
//                   }
//                 </div>
//               ))
//             }
//           </div>

//         </>)
//       }
//     </div>
//   )
// }

// export default Sidebar;












// import React from 'react';

// import { NavLink, Link } from 'react-router-dom';
// import { SiShopware } from 'react-icons/si';
// import { MdOutlineCancel } from 'react-icons/md';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';
// import { links } from '../data/dummy';

// import { useStateContext } from '../contexts/ContextProvider';


// const Sidebar = () => {
//   const { activeMenu, setActiveMenu } = useStateContext();
//   // const activeMenu = true;

//   const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
//   const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

//   return (
//     <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto'>
//       {
//         activeMenu && (<>
//           <div className='flex items-center justify-between'>
//             <Link to='/' onClick={() => setActiveMenu(false)} className='mt-4 ml-3 flex items-center gap-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
//               <SiShopware /><span>Shoppy</span>
//             </Link>

//             <TooltipComponent content='Menu' position='BottomCenter'>
//               <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
//                 <MdOutlineCancel />
//               </button>
//             </TooltipComponent>
//           </div>
//           <div className='mt-10'>
//             {
//               links.map((item) => (
//                 <div key={item.title}>
//                   <p className='mt-4 m-3 uppercase text-xl text-gray-400'
//                   >{item.title}</p>
//                   {
//                     item.links.map((link) => (
//                       <NavLink to={`/${link.name}`} key={link.name} className={({ isActive }) => isActive
//                         ? activeLink : normalLink}>
//                         {link.icon}
//                         <span className='capitalize'>{link.name}</span>
//                       </NavLink>
//                     ))
//                   }
//                 </div>
//               ))
//             }
//           </div>

//         </>)
//       }
//     </div>
//   )
// }

// export default Sidebar;













// import React from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import { SiShopware } from 'react-icons/si';
// import { MdOutlineCancel } from 'react-icons/md';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';
// import { links } from '../data/dummy';



// const Sidebar = () => {
//   const activeMenu = true;

//   const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
//   const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';


//   return (
//     <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto'>
//       {
//         activeMenu && (<>
//           <div className='flex items-center justify-between'>
//             <Link to='/' className='mt-4 ml-3 flex items-center gap-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
//               <SiShopware /><span>Shoppy</span>
//             </Link>

//             <TooltipComponent content="Menu" position='BottomCenter'>
//               <button type='button' onClick={() => { }} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
//                 <MdOutlineCancel />
//               </button>
//             </TooltipComponent>
//           </div>

//           <div className='mt-10'>
//             {
//               links.map((item) => (<div key={item.title}>
//                 <p className='mt-4 m-3 uppercase text-xl text-gray-400'>
//                   {item.title}
//                 </p>
//                 {item.links.map((link) => (
//                   <NavLink
//                     to={`/${link.name}`}
//                     key={link.name}
//                     className={({ isActive }) => isActive ? activeLink : normalLink}
//                   >
//                     {link.icon}
//                     <span className='capitalize'>{link.name}</span>
//                   </NavLink>
//                 ))}
//               </div>))
//             }
//           </div>
//         </>)
//       }

//     </div>
//   )
// }

// export default Sidebar;









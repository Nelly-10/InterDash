import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';


import { Navbar, Sidebar, ThemeSettings } from './component';
import { Ecommerce, Customers, Employee, Order, ColorPicker, Editor, Calendar, Kanban, Base, Area, ColorMapping, Financial, Line, Pie, Pyramid, Stacked } from './page';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentMode, currentColor} = useStateContext();


  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='right-4 bottom-4 fixed' style={{ zIndex: '1000' }}>
            <TooltipComponent position='Top' content='settings'>
              <button type='button' 
              className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' 
              onClick={() => setThemeSettings(true)} 
              style={{ background: currentColor, borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* SIDE BAR */}
          {
            activeMenu ? (<div className='w-72 Sidebar fixed dark:bg-secondary-dark-bg bg-dark'>
              <Sidebar />
            </div>) :
              (<div className='w-0 dark:bg-secondary-dark-bg'>0</div>)
          }

          {/* NAVBAR */}
          <div className={`min-h-screen w-full dark:bg-main-dark-bg bg-main-bg ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='w-full fixed md:static navbar'>
              <Navbar />
            </div>


            {/* Routes */}
            <div>
              {themeSettings && (<ThemeSettings />)}
              <Routes>
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/customers" element={<Customers />} />w
                <Route path="/employees" element={<Employee />} />
                <Route path="/orders" element={<Order />} />

                {/* Apps */}
                <Route path="/color-picker" element={<ColorPicker />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/kanban" element={<Kanban />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/base" element={<Base />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;


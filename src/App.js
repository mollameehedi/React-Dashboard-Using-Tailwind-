import React,{useEffect} from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import {FiSettings} from 'react-icons/fi';
import {Tooltip, TooltipComponent} from '@syncfusion/ej2-react-popups';

import {Navbar, Footer,Sidebar,ThemeSettings} from './components';
import './App.css';
import {Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid,Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker,ColorMapping,Editor} from './pages';

const App = () => {
    const activeMenu = false;
  return (
    <div>
        <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='flex right-4 bottom4' style={{ zIndex:'1000' }}>
                    <TooltipComponent content="Settings" position="Top">
                        <button type='button' className='text-3xl p-3 hover:drop-shadow-x1 hover:bg-light-gray text-white' style={{ background:'blue', borderRadius:'50%' }}>
                            <FiSettings/>
                        </button>
                    </TooltipComponent>
                    {activeMenu ? (
                        <div className='w-72 fixed       sidebar dark:bg-secondary-dark-bg bg-white'>
                            <Sidebar/>
                        </div>
                    ):(
                        <div className='w-0 dark:bg-secondary-dark-bg'>
                           <Sidebar/>
                        </div>
                    )}
                    <div className={
                        `dark:bg-main-bg bg-main-bg min-h-screen md:ml72 w-full ${activeMenu ? ' md:ml72' : 'flex-2'}`
                        
                    }>
                        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                            <Navbar/>
                        </div>
                    </div>
                    <div>
                        <Routes>
                            {/* Dashboard */}
                            <Route path="/" element={<Ecommerce/>} />
                            <Route path="/ecommerce" element={<Ecommerce/>} />

                            {/* pages */}
                            <Route path='/employees' element={<Employees/>} />
                            <Route path='/customers' element={<Customers/>} />

                            {/* Apps */}
                            <Route path='/kanban' element={<Kanban/>} />
                            <Route path='/editor' element={<Editor/>} />
                            <Route path='/calendar' element={<Calendar/>} />
                            <Route path='/Color-picker' element={<ColorPicker/>} />

                            {/* Charts */}
                            {/* <Route path='/line' element={<Line/>} /> */}
                            <Route path='/area' element={<Area/>} />
                            <Route path='/bar' element={<Bar/>} />
                            <Route path='/pie' element={<Pie/>} />
                            <Route path='/financial' element={<Financial/>} />
                            <Route path='/color-mapping' element={<ColorMapping/>} />
                            <Route path='/stacked' element={<Stacked/>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter> 
        </div>
  )
}

export default App


// 35 minit video
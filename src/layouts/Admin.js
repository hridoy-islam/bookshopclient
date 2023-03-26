import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import Header from '../components/admin/Header';



const Admin = () => {
    return (
        <div>
            
            <div className='flex'>
                <div className='w-64'>
                <Sidebar />
                </div>
            <div className='grow'>
            <Header />
            <div className='p-4'>
            <Outlet></Outlet>
            </div>
            </div>
            </div>
            

        </div>
    );
};

export default Admin;
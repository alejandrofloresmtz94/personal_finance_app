import React, { Fragment, useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Budgets, Home, Logout, MinimizeMenu, Pots, RecurringBills, Transactions } from '../../assets/icons';
import { useFirebaseApp } from "reactfire";
import { getAuth, signOut } from "firebase/auth";
import { AuthComponent } from '../../core/interfaces/auth.store.interfaces';
import Logo from '../../assets/images/Logo.png'
import useAuthStore from '../../core/stores/authStore';
import AppLoading from '../components/appLoading/AppLoading';
import './_layout.scss';
import useGeneralStore from '../../core/stores/generalStore';

const Layout: React.FC = () => {
    const [showLoading, setShowLoading] = useState<boolean>(true);
    const location = useLocation();

    const setShowAuthComponent = useAuthStore((state) => state.setShowAuthComponent);
    const setUserCredential = useAuthStore((state) => state.setUserCredential);
    const isSidebarCollapsed = useGeneralStore((state) => state.isSidebarCollapsed);
    const setIsSidebarCollapsed = useGeneralStore((state) => state.setIsSidebarCollapsed);

    const app = useFirebaseApp();
    const auth = getAuth(app);

    const logout = () => {
        signOut(auth).then(() => {
            setShowAuthComponent(AuthComponent.LOGIN);
            setUserCredential(null);
        }).catch(() => {
        });
    };

    useEffect(() => {
        setTimeout(() => {
            setShowLoading(false);
        }, 2000);
    }, []);

    return (
        <Fragment>
            {showLoading && <AppLoading />}
            <div className="flex flex-row w-full h-full">
                <Sidebar backgroundColor='#000000' collapsed={isSidebarCollapsed}>
                    <div className='flex flex-col justify-between h-full py-10'>
                        <Menu rootStyles={{
                            color: '#ffffff',
                        }}>
                            <li className='px-3 pb-10'>
                                <img src={Logo} alt="logo" className='' />
                            </li>
                            <MenuItem className={location.pathname === "/" ? "active" : ""} component={<Link to="/" />} icon={<Home />}>Overview</MenuItem>
                            <MenuItem className={location.pathname === "/transactions" ? "active" : ""} component={<Link to="/transactions" />} icon={<Transactions />}>Transactions</MenuItem>
                            <MenuItem className={location.pathname === "/budgets" ? "active" : ""} component={<Link to="/budgets" />} icon={<Budgets />}>Budgets</MenuItem>
                            <MenuItem className={location.pathname === "/pots" ? "active" : ""} component={<Link to="/pots" />} icon={<Pots />}>Pots</MenuItem>
                            <MenuItem className={location.pathname === "/recurring-bills" ? "active" : ""} component={<Link to="/recurring-bills" />} icon={<RecurringBills />}>Recurring bills</MenuItem>
                        </Menu>
                        <Menu rootStyles={{
                            color: '#ffffff',
                        }}>
                            <MenuItem className='rotate-icon' icon={<MinimizeMenu />} onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}>Minimize menu</MenuItem>
                            <MenuItem icon={<Logout />} onClick={logout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Sidebar>
                <div className='w-full h-full px-10 py-10 bg-beige-100'>
                    <Outlet />
                </div>
            </div>
        </Fragment>
    );
};

export default Layout;
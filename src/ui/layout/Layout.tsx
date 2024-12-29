import React, { Fragment, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Budgets, Home, Logout, MinimizeMenu, Pots, RecurringBills, Transactions } from '../../assets/icons';
import { useFirebaseApp } from "reactfire";
import { getAuth, signOut } from "firebase/auth";
import { AuthComponent } from '../../core/interfaces/auth.store.interfaces';
import Logo from '../../assets/images/Logo.png'
import useAuthStore from '../../core/stores/authStore';
import './_layout.scss';
import AppLoading from '../components/appLoading/AppLoading';

const Layout: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [showLoading, setShowLoading] = useState<boolean>(true);

    const setShowAuthComponent = useAuthStore((state) => state.setShowAuthComponent);
    const setUserCredential = useAuthStore((state) => state.setUserCredential);

    const app = useFirebaseApp();
    const auth = getAuth(app);

    const logout = () => {
        signOut(auth).then(() => {
            setShowAuthComponent(AuthComponent.LOGIN);
            setUserCredential(null);
        }).catch(() => {
            console.log('An error ocurred while signing out');
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
                <Sidebar backgroundColor='#000000' collapsed={collapsed}>
                    <div className='flex flex-col justify-between h-full py-10'>
                        <Menu rootStyles={{
                            color: '#ffffff',
                        }}>
                            <li className='px-3 pb-10'>
                                <img src={Logo} alt="logo" className='' />
                            </li>
                            <MenuItem component={<Link to="/" />} icon={<Home />}>Overview</MenuItem>
                            <MenuItem component={<Link to="/transactions" />} icon={<Transactions />}>Transactions</MenuItem>
                            <MenuItem component={<Link to="/budgets" />} icon={<Budgets />}>Budgets</MenuItem>
                            <MenuItem component={<Link to="/pots" />} icon={<Pots />}>Pots</MenuItem>
                            <MenuItem component={<Link to="/recurring-bills" />} icon={<RecurringBills />}>Recurring bills</MenuItem>
                        </Menu>
                        <Menu rootStyles={{
                            color: '#ffffff',
                        }}>
                            <MenuItem className='rotate-icon' icon={<MinimizeMenu />} onClick={() => setCollapsed(!collapsed)}>Minimize menu</MenuItem>
                            <MenuItem icon={<Logout />} onClick={logout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Sidebar>
                <Outlet />
            </div>
        </Fragment>
    );
};

export default Layout;
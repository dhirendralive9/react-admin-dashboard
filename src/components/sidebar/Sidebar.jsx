import './sidebar.scss';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import DnsIcon from '@mui/icons-material/Dns';
import SettingsIcon from '@mui/icons-material/Settings';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
  
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">
                OpAdmin
            </span>
            </Link>
           
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">Main</p>
                <li>
                    <GridViewIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <li>
                    <AccountBoxIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                    <GroupIcon className='icon'/>
                    <span>Users</span>
                    </Link>
                </li>
                <li>
                   <Link to="/products" style={{ textDecoration: "none" }}>
                   <Inventory2Icon className='icon'/>
                    <span>Products</span>
                   </Link>
                </li>
                <li>
                    <LocalPostOfficeIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <p className="title">Utilities</p>
                <li>
            
                    <QueryStatsIcon className='icon'/>
                    <span>Stats</span>
                 
                </li>
                <li>
                   <CircleNotificationsIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className="title">Controls</p>
                <li>
                    <DnsIcon className='icon'/>
                    <span>System</span>
                </li>
                <li>
                    <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <li>
                    <ReceiptLongIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <LogoutIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=> dispatch({ type:"LIGHT" })}></div>
            <div className="colorOption" onClick={()=> dispatch({ type:"DARK" })}></div>
        </div>
    </div>
  )
}

export default Sidebar
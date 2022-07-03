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

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">
                OpAdmin
            </span>
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
                    <GroupIcon className='icon'/>
                    <span>Users</span>
                </li>
                <li>
                    <Inventory2Icon className='icon'/>
                    <span>Products</span>
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
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar
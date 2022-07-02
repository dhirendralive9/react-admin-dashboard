import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListIcon from '@mui/icons-material/List';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...'/>
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
          <LanguageIcon />
          </div>
          <div className="item">
          <DarkModeIcon />
          </div>
          <div className="item">
          <CloseFullscreenIcon />
          </div>
          <div className="item">
          <NotificationsIcon />
          </div>
          <div className="item">
          <ChatBubbleIcon />
          </div>
          <div className="item">
          <ListIcon />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
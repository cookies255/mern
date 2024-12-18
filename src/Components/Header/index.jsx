import {Link} from 'react-router-dom';
import pp1 from '../../assets/images/pp1.png';
import { IoSearchOutline } from "react-icons/io5";
import { Button } from '@mui/material';
import { WiAlien } from "react-icons/wi";

const Header = () => {
    return (
        <>
        {/* Logo Start */}
        <div className='headerWrapper'>
          <div className="header">
            <div className="container">
                <div className='row'>
                    <div className="logoWrapper col-sm-3">
                    <Link to={'/'}><img src={pp1} alt='Logo '/></Link>
                    </div>
                </div>
            </div>
            </div>
          
          {/* Logo End */}

          {/* SearchBar Start */}
          <div className='headerSearch'>
            <input type='text' placeholder='Search our store'/>
            <Button><IoSearchOutline /></Button>
          </div>
          </div>
          {/* SearchBar Ends */}

          {/* User Icon Start */}
          <div className='part3 d-flex align-items-center'>
            <Button><WiAlien /></Button>
          </div>
          {/* User Icon End */}
        </>
    );
}

export default Header;

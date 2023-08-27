import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
    <ThemeContext.Consumer>
        {value => {
            const {isDarkTheme, toggleTheme} = value

            const onClickToggle = () => {
                toggleTheme()
            }

            const bgColor = isDarkTheme ? 'bg-dark' : 'bg-light'

            const themeImageUrl = isDarkTheme ? 
                    'https://assets.ccbp.in/frontend/react-js/light-theme-img.png' :
                    'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
            const websiteImageUrl = isDarkTheme ?
                    'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png' :
                    'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
    
            const navItemColor = isDarkTheme ? 'dark-text' : 'light-text'

            return(
                <div className={`navbar ${bgColor}`}>
                    <div className='navbar-content'>
                        <img src={websiteImageUrl} className='website-logo' alt='website logo' />
                        <ul className='nav-menu'>
                            <li className='nav-menu-item'>
                                <Link to='/' className={`nav-link ${navItemColor}`} >Home</Link>
                            </li>
                            <li className='nav-menu-item'>
                                <Link to='/about' className={`nav-link ${navItemColor}`} >About</Link>
                            </li>
                        </ul>
                        <button type='button' data-testid='theme' onClick={onClickToggle} className='theme-btn' >
                            <img src={themeImageUrl} className='theme-image' alt='theme' />
                        </button>
                    </div>
                </div>
            )
        }}
    </ThemeContext.Consumer>
)

export default Navbar
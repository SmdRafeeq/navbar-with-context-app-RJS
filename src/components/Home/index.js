import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
    <ThemeContext.Consumer>
        {value => {
            const {isDarkTheme} = value
            
            const bgContainer = isDarkTheme ? 'bg-dark' : 'bg-light'

            const aboutImageUrl = isDarkTheme ?
                    'https://assets.ccbp.in/frontend/react-js/home-dark-img.png' :
                    'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

            const textColors = isDarkTheme ? 'light-text' : 'dark-text'

            return(
                <div className={`home-container ${bgContainer}`}>
                    <Navbar />
                    <div className='page-container'>
                        <div className='content'>
                            <img src={aboutImageUrl} alt='Home' className='image' />
                            <h1 className={`heading ${textColors}`}>Home</h1>
                        </div>
                    </div>
                </div>
            )
        }}
    </ThemeContext.Consumer>
)

export default Home
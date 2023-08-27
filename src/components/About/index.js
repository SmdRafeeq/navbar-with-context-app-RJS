import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
    <ThemeContext.Consumer>
        {value => {
            const {isDarkTheme} = value
            
            const bgContainer = isDarkTheme ? 'bg-dark' : 'bg-light'

            const aboutImageUrl = isDarkTheme ?
                    'https://assets.ccbp.in/frontend/react-js/about-dark-img.png' :
                    'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

            const textColors = isDarkTheme ? 'light-text' : 'dark-text'

            return(
                <div className={`about-container ${bgContainer}`}>
                    <Navbar />
                    <div className='page-container'>
                        <div className='content'>
                            <img src={aboutImageUrl} alt='About' className='image' />
                            <h1 className={`heading ${textColors}`}>About</h1>
                        </div>
                    </div>
                </div>
            )
        }}
    </ThemeContext.Consumer>
)

export default About
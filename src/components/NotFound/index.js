import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
    <ThemeContext.Consumer>
        {value => {
            const {isDarkTheme} = value

            const bgContainer = isDarkTheme ? 'bg-dark' : 'bg-light'
            const headingColor = isDarkTheme ? 'heading-light': 'heading-dark'
            const paraText = isDarkTheme ? 'para-light':'para-dark'

            return(
                <div className={`main-container ${bgContainer}`}>
                    <Navbar />
                    <div className='responsive-container'>
                        <img src='https://assets.ccbp.in/frontend/react-js/not-found-img.png' alt='not found' className='not-found-img' />
                        <h1 className={`heading ${headingColor}`}>lost your way?</h1>
                        <p className={`para ${paraText}`}>
                            We cannot seem to find the page you are looking for.
                        </p>
                    </div>
                </div>
            )
            
        }}
    </ThemeContext.Consumer>
)

export default NotFound
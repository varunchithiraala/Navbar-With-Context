// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutBgclassName = isDarkTheme ? 'about-bg-dark' : 'about-bg-light'

      const aboutImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutTextClassName = isDarkTheme
        ? 'about-text-light'
        : 'about-text-dark'

      return (
        <div className={`about-app-container ${aboutBgclassName}`}>
          <Navbar />
          <div className="about-page-container">
            <div className="about-container">
              <img className="about-image" src={aboutImageUrl} alt="about" />
              <h1 className={`about-heading ${aboutTextClassName}`}>About</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About

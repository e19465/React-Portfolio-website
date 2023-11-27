import './toggle.css'
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context'

const Toggle = () => {
    const theme = useContext(ThemeContext);

    const handleDarkMode = () => {
        theme.dispatch({type: "TOGGLE"});
    }

  return (
    <div className='t'>
        <img src={Sun} alt="" className='t-icon'/>
        <img src={Moon} alt="" className='t-icon'/>
        <div className="t-button" onClick={handleDarkMode} style={{
        left: theme.state.darkMode ? 35 : 0
        }}></div>
    </div>
  )
}

export default Toggle
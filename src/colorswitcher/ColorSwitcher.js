import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import ColorItem from './ColorItem';
import { useEffect, useState } from 'react';

const ColorSwitcher = () => {
    const colors = ['#3ab773', '#1F51FF', '#9D00FF', '#ffba08', '#FF3131', '#f95738'];

    const [state, setState] = useState(false);
    useEffect(() => {
        const currentColor = localStorage.getItem('color');
        setTheme(currentColor);
    },[]);

    const setTheme = (color) => {
        document.documentElement.style.setProperty('--heading-color', color);
    }

    const setColor = (event) => {
        const currentColor = event.target.style.getPropertyValue('--heading-color');
        setTheme(currentColor);
        localStorage.setItem('color', currentColor);
    }

    return (
      <>
        <div className={`color-switcher ${state && 'color-switcher--open'}`}>
          <button className='color-btn' onClick={() => setState(prevState => !prevState)}><FontAwesomeIcon icon={faCog} /></button>
          <p><b>Select Color</b></p>
          <div className='color-list'>
            {colors.map((color, idx) => <ColorItem key={idx} setColor={setColor} color={color} />)}
          </div>
        </div>
      </>
    )
  }
  export default ColorSwitcher
  
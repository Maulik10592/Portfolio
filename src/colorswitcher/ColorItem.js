const ColorItem = ({color, setColor}) => <div className='color-item' onClick={setColor} style={{'--heading-color': color}}></div>

export default ColorItem;
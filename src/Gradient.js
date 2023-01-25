import './styles/gradient.css';
function Gradient(props) {
  const {hue, saturation, number} = props;
  let light = 0;
  let squares = []
  for (let i = 1; i <= number; i++) {
    let backgroundStyle = {
      backgroundColor: `hsl(${hue},${saturation}%,${light}%)`
    }
    squares.push(<div className='square' style = {backgroundStyle} key={i}></div>)
    light = light + (100/number);
  }

  return (
    <div className='squares'>
      {squares}
    </div>
  )
 }

 export default Gradient
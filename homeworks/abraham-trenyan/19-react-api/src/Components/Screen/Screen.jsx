import './Screen.css'
const Screen = ({value}) => {
    return ( 
        <div className="screen"><h2 className='screen__calc'>{value}</h2><h1 className='screen__result'>{value}</h1></div>
     );
}
 
export default Screen;
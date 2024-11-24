import './header.css'
import Logo from '../../assets/img/LogoPaimon.png'
function header(){
    return(
        <header className='header'>
            <img src={Logo} alt="logo" />
            <h1>InfoGenshin</h1>
            
        </header>
    )
}
export default header
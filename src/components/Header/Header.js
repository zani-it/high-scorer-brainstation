import homeHeader from '../../assets/images/home-header.png'
import betHeader from '../../assets/images/bet-header.png'
import './Header.scss'

export default function Header() {
    return (
        <header className="header">
            <img className="header__image" src={homeHeader}/>
        </header>
    )
}
import homeHeader from '../../assets/images/home-header.png'
import betHeader from '../../assets/images/bet-header.png'
import './Header.scss'

export default function Header(props) {

    let headerSrc = "";

    if (props.page === "home") {
        headerSrc = homeHeader
    }

    if (props.page === "bet") {
        headerSrc = betHeader
    }

    return (
        <header className="header">
            <img className="header__image" src={headerSrc}/>
        </header>
    )
}
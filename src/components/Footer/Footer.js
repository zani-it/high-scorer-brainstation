import homeFooter from '../../assets/images/home-footer.png'
import betFooter from '../../assets/images/bet-footer.png'

import homeChipIcon from '../../assets/icons/Poker chip-home.svg'
import betChipIcon from '../../assets/icons/Poker chip-bet.svg'

import './Footer.scss'

export default function Footer(props) {

    let footerSrc = "";
    let iconSrc = "";

    if (props.page === "home") {
        footerSrc = homeFooter
    }

    if (props.page === "bet") {
        footerSrc = betFooter
    }

    if (props.page === "home") {
        iconSrc = homeChipIcon
    }

    if (props.page === "bet") {
        iconSrc = betChipIcon
    }

    return (
        <footer className="footer">
            <img className="footer__image" src={footerSrc}/>
            <div className="footer__icon-container">
                <img className="footer__icon" src={iconSrc}/>
            </div>
        </footer>
    )
}
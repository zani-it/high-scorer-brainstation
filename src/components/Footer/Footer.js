import homeFooter from '../../assets/images/home-footer.png'
import betFooter from '../../assets/images/bet-footer.png'
import './Footer.scss'

export default function Footer() {
    return (
        <footer className="footer">
            <img className="footer__image" src={homeFooter}/>
        </footer>
    )
}
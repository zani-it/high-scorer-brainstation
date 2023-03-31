import homeContent from '../../assets/images/home-content.png'
import betontent from '../../assets/images/bet-content.png'
import './Content.scss'

export default function Content() {
    return (
        <header className="content">
            <img className="content__image" src={homeContent}/>
        </header>
    )
}
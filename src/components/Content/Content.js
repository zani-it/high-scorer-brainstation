import homeContent from '../../assets/images/home-content.png'
import betContent from '../../assets/images/bet-content.png'
import './Content.scss'

export default function Content(props) {

    let contentSrc = "";

    if (props.page === "home") {
        contentSrc = homeContent
    }

    if (props.page === "bet") {
        contentSrc = betContent
    }

    return (
        <dev className="content">
            <img className="content__image" src={contentSrc}/>
        </dev>
    )
}
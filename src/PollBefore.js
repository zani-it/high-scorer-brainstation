import rapitorsLogo from "./assets/media/rap.png";
import "./assets/styles/_pool.scss";
import philadelphiaLogo from "./assets/media/phil.png";
import {Link} from "react-router-dom"
const PollBefore = () => {
  return (
    <div className="news-pool pool_background">
      <div className="team__logos horizontal">
        <div className="logo__item">
          <img src={rapitorsLogo} /> <p>38-38</p>
        </div>
        <div className="vs__text">
          <h1>VS.</h1>
        </div>
        <div className="logo__item">
          <img src={philadelphiaLogo} />
          <p>50-26</p>{" "}
        </div>
      </div>
      <div className="hero__text">
      <h1 className = "who">Who will win tonight's game?</h1>
      </div>
      <div className="pool__results1">
        <div className="horizontal">
            <div className = "circle"></div>
          <div className="results__text1">
            <p>Toronto Raptors</p>
          </div>
        </div>

        <div className="horizontal">
        <div className = "circle"></div>

          <div className="results__text1">
            <p>Philadelphia 76ers</p>
          </div>
        </div>

        <div className="results__votes1">
          <p>total Votes: 25 - 4 hours left</p>
          <Link to = "/bet" className = "vote__button">Vote</Link>
        </div>
      </div>
    </div>
  );
};

export default PollBefore;

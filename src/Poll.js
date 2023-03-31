
import rapitorsLogo from "./assets/media/rap.png";
import "./assets/styles/_pool.scss";
import philadelphiaLogo from "./assets/media/phil.png";


function Poll() {
  return (
    <div className="news-pool pool_background">
      <div className="team__logos horizontal">
        <div className="logo__item"><img src={rapitorsLogo}/> <p>38-38</p></div>
        <div className="vs__text">
          <h1>VS.</h1>
        </div>
        <div className="logo__item"><img src={philadelphiaLogo}/><p>50-26</p> </div>
      </div>
      <div className="hero__text">
        <h1>Who will win tonight's game?</h1>
      </div>
      <div className="pool__results">

    <div className="horizontal">
          <div className="results__text">
            <p>40%</p>
          </div>
          <div className="results__text">
            <p>Toronto Raptors</p>
          </div>
        </div>

        <div className="pool__results-bar"></div>

        <div className="horizontal">
          <div className="results__text">
            <p>60%</p>
          </div>
          <div className="results__text">
            <p>Philadelphia 76ers</p>
          </div>
        </div>

        <div className="pool__results-bar-2"></div>

        <div className="results__votes">
          <p>total Votes:25 - 4 hours left</p>
        </div>
      </div>
    </div>
  );
}

export default Poll;

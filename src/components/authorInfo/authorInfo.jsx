import React from "react";
import photo from "../../assets/author.jpeg";
import classes from "./authorInfo.module.css";
class AuthorInfo extends React.Component {
  state = {
    show: false,
  };
  toggleShow = () => {
    this.setState((state, props) => ({
      show: !state.show,
    }));
  };

  render() {
    let showClasses = [classes.Tools];
    if (this.state.show) {
      showClasses.push(classes.Open);
    } else {
      showClasses.push(classes.Close);
    }
    return (
      <div className={classes.AuthorWrapper}>
        <div className={classes.PartOne}>
          <div className={classes.Img}>
            <img src={photo} alt="" />
          </div>
          <div className={classes.meInfo}>
            <div className={classes.Paragraphs}>
              <div>Name:</div>
              <div>Andrew</div>
            </div>
            <div className={classes.Paragraphs}>
              <div>Age:</div>
              <div>21</div>
            </div>
            <div className={classes.Paragraphs}>
              <div>Last job:</div>
              <div>translator</div>
            </div>
            <div className={classes.Paragraphs}>
              <div>Hobby:</div>
              <div>watching movies in English</div>
            </div>
          </div>
        </div>
        <div className={classes.partTwo}>
          <h2>About me</h2>
          <div>
            Hi everyone, if you are reading this hope you have an amazing day
            &#9786;! Long story short: about 8 months ago i started learning web
            technologies in particular front-end. I`ve trully enjoyed the whole
            way of studying and time has come to move further!
            <p>
              My goal now is to become a valuable team member along with other
              developers by keeping on obtaining new skills and acquiring best
              practice cases from more experienced colleagues. I`m sure that
              love to what you do is a true key to become an essential asset at
              any company.
            </p>
            <p>
              Currently i live in Poltava, yet ready to relocate any minute
              ANYWHERE!
            </p>
          </div>
        </div>
        <div className={classes.Addition}>
          <div>
            By the way you can{" "}
            <strong onClick={this.toggleShow}>CHECK OUT</strong> libraries and
            tools i used to create this project
          </div>
          <div className={showClasses.join(" ")}>
            <span>React</span>, <span>redux</span>, <span>react-redux</span>,{" "}
            <span>react-router-dom</span>, <span>redux-form</span>,{" "}
            <span>axios</span>, <span>redux-thunk</span>,{" "}
            <span>CSS classes</span>
          </div>
        </div>
      </div>
    );
  }
}
export default AuthorInfo;

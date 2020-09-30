import Axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { postUserThunk } from "../../Redux/user/userThunk";
import RegistrationForm from "../form/registrationForm";
import Spinner from "../spinner/spinner";
import classes from "./Registration.module.css";
class Registration extends React.Component {
  state = {
    fact: null,
    spin: false,
  };
  componentDidMount() {
    this.setState({ spin: true });
    Axios.get("https://meowfacts.herokuapp.com/").then((Response) => {
      this.setState({ spin: false });
      let string = Response.data.data.join();
      this.setState({ fact: string });
    });
  }
  submitData = (data) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;

    let id = new Date();
    let object = {
      id: id,
      date: today,
      userName: data.FirstName,

      userSecondName: data.SecondName,
      selected: data.Selected,
      cardInfo: data.CardInfo,
    };

    this.props.postUserThunk(object);
  };
  render() {
    let registrationForm = (
      <div className={classes.Registration}>
        <RegistrationForm onSubmit={this.submitData} />
        {this.spin ? (
          <Spinner />
        ) : (
          <div className={classes.Fact}>{this.state.fact}</div>
        )}
      </div>
    );
    if (this.props.loading) {
      registrationForm = <Spinner />;
    }
    return <>{registrationForm}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.userReducer.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    postUserThunk: (object) => dispatch(postUserThunk(object)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Registration);

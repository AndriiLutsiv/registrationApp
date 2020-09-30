import React from "react";
import { connect } from "react-redux";
import Button from "../button/button";
import User from "./user/user";
import classes from "./clientsList.module.css";
import Axios from "axios";
import { fetchUsersThunk } from "../../Redux/user/userThunk";
import Spinner from "../spinner/spinner";
class ClientList extends React.Component {
  // componentDidMount() {
  //   this.props.fetchUsersThunk();
  // }

  goToRegistrationPage = () => {
    this.props.history.push("/registration");
  };

  render() {
    let users = this.props.users.map((user, index) => {
      return <User key={index} userName={user.userName} date={user.date} />;
    });
    let clientList = (
      <div className={classes.ClientWrapper}>
        <div className={classes.ClientList}>{users}</div>
        <div>
          <Button onClick={this.goToRegistrationPage}>REGISTRATION</Button>
        </div>
      </div>
    );

    if (this.props.loading) {
      clientList = <Spinner />;
    }
    return <>{clientList}</>;
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
    loading: state.userReducer.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersThunk: () => dispatch(fetchUsersThunk()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);

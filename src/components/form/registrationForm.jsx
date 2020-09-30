import React from "react";
import classes from "./registrationForm.module.css";
import { Field, reduxForm } from "redux-form";
import Button from "../button/button";
import { requiredField } from "../../assets/validators";
import Input from "../input/input";

class Form extends React.Component {
  state = {
    value: "disabled",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  render() {
    let cardField = (
      <div className={classes.CardInput}>
        <Field
          component={"input"}
          type="number"
          name="CardInfo"
          placeholder="Card number"
        />
      </div>
    );
    return (
      <form onSubmit={this.props.handleSubmit} className={classes.Form}>
        <div className={classes.Input}>
          <Field
            validate={[requiredField]}
            component={Input}
            type="text"
            name="FirstName"
            label={"Enter your name"}
          />
        </div>
        <div className={classes.Input}>
          <Field
            component={Input}
            type="text"
            name="SecondName"
            validate={[requiredField]}
            label="Second name"
          />
        </div>
        <div className={classes.Sex}>
          <p>Sex:</p>
          <div>
            <Field component="input" type="radio" name="Sex" /> male
            <Field component="input" type="radio" name="Sex" /> female
          </div>
        </div>
        <div className={classes.Loalty}>
          <p>Loalty program</p>
          <Field
            component="select"
            onChange={this.handleChange}
            value={this.state.value}
            name="Selected"
          >
            <option value="disabled">Disabled</option>
            <option value="plastic card">Plastic card</option>
            <option value="mobile app">Mopile app</option>
          </Field>

          {this.state.value === "plastic card" && cardField}
        </div>
        <Button onClick={this.props.onClick}>Sign me up</Button>
      </form>
    );
  }
}
const RegistrationForm = reduxForm({
  form: "registration",
})(Form);
export default RegistrationForm;

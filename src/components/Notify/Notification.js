import React, { Component } from "react";
import s from "./notify.module.css";

class Notification extends Component {
  state = {
    timer: null,
  };

  componentDidUpdate() {
    clearTimeout(this.timer);
  }

  render() {
    this.timer = setTimeout(this.props.onNotify.bind(this), 3000);

    return (
      <div className={s.notify} onClick={() => this.props.onNotify()}>
        Contact alredy exist!
      </div>
    );
  }
}

export default Notification;

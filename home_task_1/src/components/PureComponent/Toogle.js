import React, { PureComponent } from "react";

class PureComponentToggle extends PureComponent {
  constructor() {
    super()
    this.state = {
      genre: ''
    }
  }

  onSelect = (e) => {
    this.setState({ genre: e.target.value })
  }

  render() {
    return (
      <div className="content-toggle">
        <h2 className="title">Toogle</h2>
        <label for="genre">Genre: </label>
        <select className="genre" onChange={this.onSelect}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <p className="selected">{this.state.genre}</p>
      </div>
    )
  }
}

export default PureComponentToggle;

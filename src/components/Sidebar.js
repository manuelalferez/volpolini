import React, { Component } from "react";
import "./styles/Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
      <h1 className='Sidebar__title'>CATEGORÍAS</h1>
        <ul className="Sidebar__list">
          {this.props.data.map(ele => (
            <li className='Sidebar__list-item' key={ele.key}>{ele.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;

import React from "react";

 export default class NewLineItem extends React.Component {
  
  render () {
    return(
<div>
    <h2>{this.props.title}</h2>
    <p>{this.props.article}</p>
</div>
    );
  }
}

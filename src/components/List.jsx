import React from "react";
import { connect } from "react-redux";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
// import { Timeline } from '@newrelic/nr1-community';
import store from "../store";
import NewLineItem from "./NewLineItem";


const mapStateToProps = state => {
  return { articles: state.articles };
};

// const List2 = connect(mapStateToProps)(ConnectedList);

// export default List;

 class ConnectedList extends React.Component {
  
  // constructor({ props }) {
  //   super(props);
  //   this.state = {articles: []};

  //   store.subscribe(() => {
  //     this.setState( {
  //       // articles: store.getState().articles
  //     })
  //   }
  //   );
  // }

  render () {
    
    const Articles = store.getState().articles;
    // const Articles = store
    return(
      <div>
        {
          Articles.map(el => (
            <NewLineItem key={el.id} {...el}/>
          ))
        }
      </div>
    //   <Timeline 
    //     width={"100%"}
    //   >
    //   {Articles.map(el => (
    //     <TimelineItem  key={el.id} dateText={el.startDate}>
    //       <h1>{el.title}</h1><hr/>
        
    //       <p>{el.article}</p>
    //     </TimelineItem>
    //   ))}
    // </Timeline>
    // <Timeline data={Articles}>

    // </Timeline>
    );
  }
}

const List = connect(
  mapStateToProps
  )(ConnectedList);

export default List;
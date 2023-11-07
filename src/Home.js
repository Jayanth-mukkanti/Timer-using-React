import React from "react";

class Home extends React.Component{
  constructor(){
    super();
    console.log("Code inside Home constructor method")
  }
  render(){
    return(
    console.log("Code inside Home render method")
    )
  }
}

export default Home;



// export const HomeComp = (props) => {
//     console.log(props.blogs.title);
//     return(
//       <div>
//       <p>{props.blogs.title}</p>
//       <h2> Hello From Home Component Element </h2>
//       </div>
//     )
//   }

// export const HomeComp1 = () => {
//     return(
//       <h5> Hello From Home Component Element two </h5>
//     )
//   }
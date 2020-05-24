import React, {useState} from 'react';



function Comp (props) {

    // const [count, setCount] = useState(1000);
    // console.log(props);

    function myOnClick(e){
        // count++ won't work couse count is const
        // setCount(count + 1);
        // console.log('We just clicked count', count); 
        
        // console.log('you clicked in Comp');
        props.countFunc();
      }

      // I can't change props that were passes from the App.js here
    return (
        <h1 onClick = {myOnClick}>Hello World from Comp{props.count}</h1>
        //if i update the page it passes the new value it re-renders it down for me
        // <h1 onClick = {myOnClickCount}> Hello from Comp: count {count} </h1>
    )
}

export default Comp
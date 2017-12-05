import React from 'react';

import Food from '../Food/Food.jsx';



class Food3 extends React.Component {


  constructor(props) {
    super(props);
  }

  render(){

    const indexVal = 2;

    return (
                <div >
                  <Food value='pie' index={indexVal} />
                </div>

    );
  }

}
export default Food3;

import React from 'react';

import Food from '../Food/Food.jsx';



class Food2 extends React.PureComponent {


  constructor(props) {
    super(props);
  }

  render(){

    const indexVal = 1;

    return (
                <div >
                  <Food value='apple' index={indexVal} />
                </div>

    );
  }

}
export default Food2;

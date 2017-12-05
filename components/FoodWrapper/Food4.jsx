import React from 'react';

import Food from '../Food/Food.jsx';



class Food4 extends React.PureComponent {


  constructor(props) {
    super(props);
  }

  render(){

    const indexVal = 3;

    return (
                <div >
                  <Food value='pizza' index={indexVal} />
                </div>

    );
  }

}
export default Food4;

import React from 'react';

import Food from '../Food/Food.jsx';



class Food1 extends React.PureComponent {


  constructor(props) {
    super(props);
  }

  render(){

    const indexVal = 0;

    return (
                <div >
                  <Food value='orange' index={indexVal} />
                </div>

    );
  }

}
export default Food1;

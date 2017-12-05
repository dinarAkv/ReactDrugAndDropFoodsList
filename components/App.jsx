import React from 'react';
import { connect } from 'react-redux';
import {  DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router';
// import queryString from 'query-string';


import * as AvailabelFoodActionCreators  from '../actions/availabel_foods';

/**
* High order components.
*/
 import Food from './Food/Food.jsx';
 import Food1 from './FoodWrapper/Food1.jsx';
 import Food2 from './FoodWrapper/Food2.jsx';
 import Food3 from './FoodWrapper/Food3.jsx';
 import Food4 from './FoodWrapper/Food4.jsx';
 import Box from './Box/Box.jsx';

/**
* Styles.
*/
 import { containerStyle } from './App.css';





 class App extends React.PureComponent {

   constructor(props) {
     super(props);


   }




  render(){


    return (
      <div className={containerStyle} >
        {/* {this.props.availabelFoods.map((food, index, arr) => {


            return (
              <div>
                <Food key={food.id} value={arr[index].name} id={food.id} index={index}
                  pushHoveredFood={this.props.availabelFoodsActions.pushHoveredFood}
                />
              </div>

            );
          } */}

          <Food1 />
          <Food2 />
          <Food3 />
          <Food4 />





      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
      availabelFoods: state.availabelFoods,
  }

};


const mapDispatchToProps = (dispatch) => ({
  availabelFoodsActions: bindActionCreators(AvailabelFoodActionCreators, dispatch),
});

App = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

export default DragDropContext(HTML5Backend)(App);

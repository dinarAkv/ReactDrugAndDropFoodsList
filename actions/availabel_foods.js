import update from 'immutability-helper';
import { DELETE_FOOD, PUSH_FOOD } from '../constants/actions';



const deleteFood = (food) => {
  return (dispatch, getState) => {
    dispatch(
      type: DELETE_FOOD,
      payload: food,
    )
  }
}


const pushFood = (data) => {
  return  {
      type: PUSH_FOOD,
      payload: data,
    }
};


export const pushHoveredFood = (draggedElementIndex, hoveredElementIndex) => {
  return (dispatch, getState) => {
    const availabelFoods = getState().availabelFoods;
    const draggedFood = availabelFoods[draggedElementIndex];

    // const pushedFoods = update(getState(), {
		// 		availabelFoods: {
		// 			$splice: [[druggedElementIndex, 1], [hoveredElementIndex, 0, draggedFood]],
		// 		},
    // });
    console.log('draggedElementIndex', draggedElementIndex);;
    availabelFoods[hoveredElementIndex] = availabelFoods.splice(draggedElementIndex, 1, availabelFoods[hoveredElementIndex])[0];

    

    // if (druggedElementIndex === hoveredElementIndex) {
    //   availabelFoods[hoveredElementIndex].name = 'new name';
    // }


    return dispatch(pushFood(Array.from(availabelFoods)));
  }
}

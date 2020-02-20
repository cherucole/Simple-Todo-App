import { ADD_ITEM, DELETE_ITEM, COMPLETED_ITEM } from './actions';

const initialState = {
  items: [
    {
      id: '349skdhis21',
      title: 'Read on Destructuring',
      description: 'Practice destructing on Scrimba',
      time: '2020-02-21',
    },
  ],
  completedItems: [],
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat({
          id: action.id,
          title: action.title,
          description: action.description,
          time: action.time,
        }),
      };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      };
    case COMPLETED_ITEM:
      let doneItem = state.items.filter(item => item.id === action.id);
      return {
        ...state,
        completedItems: state.completedItems.concat(doneItem),
        items: state.items.filter(item => item.id !== action.id),
      };

    default:
      return state;
  }
};

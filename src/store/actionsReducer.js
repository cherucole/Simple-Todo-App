import { ADD_ITEM } from './actions';

const initialState = {
  items: [
    {
      title: 'Dummy Title',
      description: 'Dummy Description',
      time: 'Dummy Time',
    },
  ],
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat({
          title: action.title,
          description: action.description,
          time: action.time,
        }),
      };

    default:
      return state;
  }
};

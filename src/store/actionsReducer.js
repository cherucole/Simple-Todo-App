import { ADD_ITEM } from './actions';

const initialState = {
  items: [
    {
      id: '349skdhis21',
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
          id: action.id,
          title: action.title,
          description: action.description,
          time: action.time,
        }),
      };

    default:
      return state;
  }
};

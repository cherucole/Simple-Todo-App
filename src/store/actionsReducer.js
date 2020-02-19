import { ADD_ITEM } from './actions';

const initialState = {
  title: 'This is a dummy title',
  description: 'This is a dummy description',
  time: 'Due on Thursday ',
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        title: action.title,
        description: action.description,
        time: action.time,
      };

    default:
      return state;
  }
};

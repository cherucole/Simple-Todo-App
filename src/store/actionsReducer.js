import { ADD_ITEM } from './actions';

const initialState = {
  items: [
    {
      id: '349skdhis21',
      title: 'Read on Destructuring',
      description: 'Practice destructing on Scrimba',
      time: '2020-02-21',
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

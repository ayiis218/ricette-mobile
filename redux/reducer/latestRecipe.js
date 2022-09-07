import {
   LATEST_RECIPE_PENDING,
   LATEST_RECIPE_SUCCESS,
   LATEST_RECIPE_FAILED,
} from '../types';

const initialState = {
   isLoading: false,
   isError: false,
   data: [],
   error: null,
};

const latestRecipe = (state = initialState, action) => {
   switch (action.type) {
      case LATEST_RECIPE_PENDING:
         return { ...state, isLoading: true };
      case LATEST_RECIPE_SUCCESS:
         return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload.data,
         };
      case LATEST_RECIPE_FAILED:
         return {
            ...state,
            isLoading: false,
            isError: true,
            error: action.payload,
         };
      default:
         return state;
   }
};

export default latestRecipe;

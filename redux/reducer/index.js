import { combineReducers } from 'redux';
import latestRecipe from './latestRecipe';
import recipeReducer from './recipe';
import listRecipe from './listRecipe';
import detailRecipe from './detailRecipe';
import detailUser from './detailUser';
import userRecipe from './userRecipe';
import recipeComment from './recipeComment';

const rootReducers = combineReducers({
   latestRecipe: latestRecipe,
   listRecipe: listRecipe,
   recipe: recipeReducer,
   detailRecipe: detailRecipe,
   detailUser: detailUser,
   userRecipe: userRecipe,
   recipeComment: recipeComment,
});

export default rootReducers;

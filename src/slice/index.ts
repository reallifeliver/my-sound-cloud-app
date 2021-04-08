import { homeReducer, HomeSliceState } from './main/homeSlice';
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  Middleware,
} from '@reduxjs/toolkit';
import { AlbumSliceState, albumReducer } from './root/albumSlice';
import { errorReducer, ErrorSliceState, errorActions } from './errorSlice';
import setAxoisInterceptor from '../modules/setAxiosInterceptor';

export const rootReducer = combineReducers<RootState>({
  home: homeReducer,
  album: albumReducer,
  error: errorReducer,
});

export interface RootState {
  home: HomeSliceState;
  album: AlbumSliceState;
  error: ErrorSliceState;
}

const store = configureStore({
  reducer: rootReducer,
  devTools: true, // FIXME
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().prepend(middleware),
});

setAxoisInterceptor(store);

export default store;
// TODO thunk 에서 발생하는 에러를 미들웨어를 통해 컨트롤 할 수 없을까??
// const middleware: Middleware = store => (next) => (action) => {
//   console.log(action);
//   try {

//   } catch(err){

//     store.dispatch(errorActions.setError)
//   }
//   const result = next(action);

//   return next(action);
// };

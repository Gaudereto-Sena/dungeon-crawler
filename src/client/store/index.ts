import { configureStore } from '@reduxjs/toolkit';
import { userListener } from './middlewares/user.middleware';
import userSlice from './reducers/user.slice';
import { heroListener } from './middlewares/hero.middleware';
import heroSlice from './reducers/hero.slice';
import gameSlice from './reducers/game.slice';
import combatLogSlice from './reducers/combatLog.slice';

const store = configureStore({
    reducer: {
        user: userSlice,
        hero: heroSlice,
        game: gameSlice,
        combatLog: combatLogSlice
    },
    middleware:
      getDefaultMiddleware =>
        getDefaultMiddleware().prepend(
          userListener.middleware,
          heroListener.middleware
        )
  });
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
  
  export default store;
  
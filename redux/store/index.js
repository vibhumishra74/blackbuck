
import { createStore, combineReducers } from 'redux'; //suggested to use toolkit but im using redux that is why this show deprecated msg
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../reducers/data';
import {persistReducer,persistStore} from 'redux-persist';

const persistConfig = {
  //...
  key:'root',
  storage: AsyncStorage,
};


const rootReducer = combineReducers({
  data:data,
});
const persistreducer12 = persistReducer(persistConfig,rootReducer)

export default ()=>{
let store = createStore(persistreducer12);
let persistor = persistStore(store)
return {store,persistor}
}

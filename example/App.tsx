/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-reanimated';
import {Provider} from 'react-redux';
import store from './Source/Store/Store';
import Main from './Source/Screens/Main';




function App() {
    return (
  
    <Provider store={store}>
   
 <Main />
     
    
    </Provider>
  );
}
export default App;

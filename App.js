import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <Main />
            </Provider>
        </NavigationContainer>
    );
    
}
import { StyleSheet, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './compenents/Login';
import {CreateAccount} from './compenents/CreateAccount';
import {ToDoList} from './compenents/ToDoList';
import { AppProvider } from './Context/todoContext';
let Stack = createNativeStackNavigator();

export default function App() {

    
return (
    <AppProvider>
    <View style={styles.container}>
        <NavigationContainer>
            {/* initialRouteName màn hình hiển thị đầu tiên */}
            <Stack.Navigator initialRouteName= "Login" screenOptions={{headerShown : false}}>
                <Stack.Screen name = 'Login' component={Login}/>
                <Stack.Screen name = "ToDoList" component={ToDoList} />
                <Stack.Screen name = "CreateAccount" component={CreateAccount} />
            </Stack.Navigator>
            </NavigationContainer>
  </View>
  </AppProvider>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
},
});

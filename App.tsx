import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'react-native-elements';
import { Home } from './app/views/Home/Home';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Login } from './app/views/Login/Login';
import { NavBar } from './app/components/NavBar';
import { Signup } from './app/views/Signup/Signup';
import { LinearGradient } from 'expo-linear-gradient';
import { SignupPage2 } from './app/views/Signup/SignupPage2';
import { SignupPage3 } from './app/views/Signup/SignupPage3';
import { SignupPage4 } from './app/views/Signup/SignupPage4';
import { SignupPage5 } from './app/views/Signup/SignupPage5';
import { Main } from './app/views/Main/Main';
import { Profile } from './app/views/Profile/Profile';
import { Messages } from './app/views/Messages/Messages';
import TabBar from './app/components/TabBar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainApp() {
  return (
    <Tab.Navigator initialRouteName="Main" tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

fetch('http://192.168.0.102:3000/user/add', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 'user002',
    first_name: 'Jesse',
    last_name: 'Du',
    email: 'jessejesse10@gmail.com',
    phone: '434-434-4343'
  })
});

export default function App() {
  let [currRoute, setRoute] = useState('');

  useEffect(() => {
    console.log(currRoute);
  }, [currRoute])

  let [fontsLoaded] = useFonts({
    'ProximaNova-Bold': require('./app/assets/fonts/ProximaNova-Bold.otf'),
    'ProximaNova-Regular': require('./app/assets/fonts/ProximaNova-Regular.otf'),
    'AllRoundGothic-Bold': require('./app/assets/fonts/AllRoundGothicW03-Bold.ttf'),
  });

  const stackNav = () => {
    return (
      <Stack.Navigator mode="modal" initialRouteName="Home" screenOptions={({ route }) => (
        setRoute(route.name),
        {
          header: props => <NavBar {...props} />,
          cardStyle: { borderRadius: 20, backgroundColor: 'transparent' }
        })
      }>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SignupPage2" component={SignupPage2} />
        <Stack.Screen name="SignupPage3" component={SignupPage3} />
        <Stack.Screen name="SignupPage4" component={SignupPage4} />
        <Stack.Screen name="SignupPage5" component={SignupPage5} />
        <Stack.Screen options={{ header: props => <NavBar {...props} main /> }} name="MainApp" component={MainApp} />

      </Stack.Navigator>
    );
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        {currRoute !== 'MainApp' ?
          <LinearGradient
            colors={['#3295E9', '#0A5FCA']}
            style={styles.linearGradient}
            start={[0, .0938]}
          >
            <View style={styles.container}>
              {stackNav()}
            </View>
          </LinearGradient > : stackNav()}
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({

  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    //backgroundColor: 'white',
    width: '90%',
    height: '90%',
    marginTop: 18, // this is for the status bar, really annoying to have to hardcode this
    borderRadius: 20,
  }
})


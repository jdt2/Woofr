import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'ProximaNova-Bold': require('./app/assets/fonts/ProximaNova-Bold.otf'),
    'ProximaNova-Regular': require('./app/assets/fonts/ProximaNova-Regular.otf'),
    'AllRoundGothic-Bold': require('./app/assets/fonts/AllRoundGothicW03-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <LinearGradient
        colors={['#3295E9', '#0A5FCA']}
        style={styles.linearGradient}
        start={[0, .0938]}
      >
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator mode="modal" initialRouteName="SignupPage5" screenOptions={{
              header: props => <NavBar {...props} />,
              cardStyle: { borderRadius: 20, backgroundColor: 'transparent' }
            }}>
              <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="SignupPage2" component={SignupPage2} />
              <Stack.Screen name="SignupPage3" component={SignupPage3} />
              <Stack.Screen name="SignupPage4" component={SignupPage4} />
              <Stack.Screen name="SignupPage5" component={SignupPage5} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>

      </LinearGradient >
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


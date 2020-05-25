import React, { Component } from 'react'
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback, Image } from 'react-native'
import { Input, Button, ThemeProvider, Text } from 'react-native-elements';
import GlobalWrapper from '../../components/GlobalWrapper';
import logo from './../../assets/Woofr-Logo.png';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
    }

    login() {
        this.props.navigation.navigate('MainApp');
    }

    render() {
        return (
            <GlobalWrapper form>
                <View style={styles.container}>
                    <Image
                        source={logo}
                        style={styles.logoImage}
                    />
                    <Text style={styles.header} h1>Log in to continue</Text>
                    <Input
                        placeholder="Email Address"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                    />
                    <Input
                        placeholder="Password"
                        textContentType="password"
                        secureTextEntry={true}
                        returnKeyType="go"
                    />
                    <Button
                        title="Don't have an account? Signup!"
                        type="clear"
                        buttonStyle={styles.signupButton}
                        containerStyle={styles.signupContainer}
                        titleStyle={styles.signupText}
                    />
                    <Button
                        style={styles.button}
                        title="Log in"
                        onPress={() => { this.login() }}
                    />
                </View>
            </GlobalWrapper>
        )
    }
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //borderRadius: 20,
        height: '100%',
    },
    header: {
        paddingLeft: 10,
        marginVertical: 15,
    },
    button: {
        /* position: 'absolute',
        bottom: 20, */
    },
    signupButton: {
        paddingLeft: 10,
        paddingTop: 0,
        borderRadius: 0,
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
    },
    signupContainer: {
        width: 300,
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        shadowOpacity: 0,
        padding: 0,
    },
    signupText: {
        textAlign: 'left',
        color: '#2979FF',
        fontFamily: 'ProximaNova-Regular',
        fontSize: 18,
    },
    logoImage: {
        width: 210,
        height: 210,
        alignSelf: 'center',
    }
});
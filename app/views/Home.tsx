import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import { Button, Text } from 'react-native-elements';

export class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require("../assets/home-background.jpg")} style={styles.background}>
                    <View style={styles.header}>
                        <Text style={styles.titleText} h1>Woofr</Text>
                        <Text style={styles.subtitleText} h4>Find your next pawtner</Text>
                    </View>
                    <View style={styles.bottomButtons}>
                        <Button style={styles.button} title="Log In" />
                        <Button style={styles.button} title="Create a Profile" />
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flex: 3,
        justifyContent: 'flex-start',
    },
    titleText: {
        textAlign: 'center',
        marginTop: 100,
    },
    subtitleText: {
        marginTop: 10,
    },
    bottomButtons: {
        flex: 1,
    },
    button: {
        marginTop: 10,
        alignSelf: 'stretch',
    }
});
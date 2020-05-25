import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator, Image } from 'react-native'
import { Button, Text } from 'react-native-elements';
import logo from './../../assets/Woofr-Logo.png';
import titleImage from './../../assets/Woofr-Title-White.png';
import GlobalWrapper from '../../components/GlobalWrapper';

export class Home extends Component {
    render() {
        return (
            <GlobalWrapper home>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image
                            source={logo}
                            style={styles.logoImage}
                        />
                        <Image
                            source={titleImage}
                            style={styles.title}
                        />
                        <Text style={styles.subtitleText}>Find your perfect pawtner</Text>
                    </View>
                    <View style={styles.bottomButtons}>
                        <Button title="Log in" onPress={() => { this.props.navigation.navigate('Login') }} />
                        <Button title="Sign up" onPress={() => { this.props.navigation.navigate('Signup') }} />
                    </View>
                </View>
            </GlobalWrapper>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#1868C3',
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        flex: 2.5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 100,
    },
    title: {
        width: 260,
        height: 64,
    },
    subtitleText: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 23,
        color: 'white',
    },
    bottomButtons: {
        flex: 1,
        width: 200
    },
    logoImage: {
        width: 210,
        height: 210,
    }
});
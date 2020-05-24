import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import title from './../assets/Woofr-Title-Blue.png';
import { Button, Icon } from 'react-native-elements';
import GlobalWrapper from './GlobalWrapper';

export class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GlobalWrapper>
                <View style={styles.container}>
                    <View style={styles.backButtonContainer}>
                        <Button
                            icon={
                                <Icon
                                    name="angle-left"
                                    type="font-awesome-5"
                                    size={30}
                                    color="#C4C4C4"
                                />
                            }
                            type="clear"
                            style={styles.backButton}
                        />
                    </View>
                    <View>
                        <Image
                            source={title}
                            style={styles.image}
                        />
                    </View>
                </View>
            </GlobalWrapper>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    image: {
        width: 167,
        height: 41,
        marginBottom: 10,
        resizeMode: 'center',
    },
    backButton: {
        marginBottom: 5,
    },
    backButtonContainer: {
        position: 'absolute',
        left: 20,
    },
})

export default NavBar
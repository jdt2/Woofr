import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import title from './../assets/Woofr-Title-Blue.png';
import { Button, Icon } from 'react-native-elements';
import GlobalWrapper from './GlobalWrapper';

interface NavBarProps {
    main?: boolean,
}

export class NavBar extends Component<NavBarProps> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GlobalWrapper>
                <View style={styles.container}>
                    <View style={styles.backButtonContainer}>
                        {this.props.main ?
                            <Button
                                icon={
                                    <Icon
                                        name="cog"
                                        type="font-awesome-5"
                                        size={30}
                                        color="#2979FF"
                                    />
                                }
                                type="clear"
                                style={styles.button}
                            />
                            : <Button
                                icon={
                                    <Icon
                                        name="angle-left"
                                        type="font-awesome-5"
                                        size={30}
                                        color="#C4C4C4"
                                    />
                                }
                                type="clear"
                                style={styles.button}
                                onPress={() => { this.props.navigation.goBack() }}
                            />
                        }
                    </View>
                    <View>
                        <Image
                            source={title}
                            style={styles.image}
                        />
                    </View>
                    {this.props.main ?
                        <View style={styles.forwardButtonContainer}>
                            <Button
                                icon={
                                    <Icon
                                        name="heart"
                                        type="font-awesome-5"
                                        size={30}
                                        solid
                                        color="#D2302C"
                                    />
                                }
                                type="clear"
                                style={styles.button}

                            />
                        </View> : <></>
                    }
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
    button: {
        marginBottom: 5,
    },
    backButtonContainer: {
        position: 'absolute',
        left: 20,
    },
    forwardButtonContainer: {
        position: 'absolute',
        right: 20,
    }
})

export default NavBar
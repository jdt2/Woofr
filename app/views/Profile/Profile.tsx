import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, Text, Tile, Image, Icon } from 'react-native-elements'
import GlobalWrapper from '../../components/GlobalWrapper'

export class Profile extends Component {
    render() {
        return (
            <GlobalWrapper profile>
                <View style={styles.container}>
                    <Avatar
                        size={125}
                        rounded
                        source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', }}
                        showAccessory
                    />
                    <Text h1>John Doe/Animal Shelter</Text>
                    <Text>Currently trying to find my buddy Rocket a new home</Text>
                    <View style={styles.dogTiles}>
                        <View style={[styles.dogTile, { justifyContent: 'center' }]}>
                            <Text style={{ color: 'white', }}>+{'\n'}Add Dog</Text>
                        </View>
                        <View style={styles.dogTile}>
                            <Image
                                source={require('./../../assets/GermanShepherd.jpg')}
                                style={styles.dogTileImage}
                            />
                            <Icon
                                name='mode-edit'
                                type='material'
                                containerStyle={styles.icon}
                                size={30}
                                color="white"
                            />
                        </View>
                        <View style={styles.dogTile}>
                            <Image
                                source={require('./../../assets/Pembroke-Welsh-Corgi.jpg')}
                                style={styles.dogTileImage}
                            />
                            <Icon
                                name='mode-edit'
                                type='material'
                                containerStyle={styles.icon}
                                size={30}
                                color="white"
                            />
                        </View>
                        <View style={[styles.dogTile, { justifyContent: 'center' }]}>
                        </View>
                        <View style={[styles.dogTile, { justifyContent: 'center' }]}>
                        </View>
                        <View style={[styles.dogTile, { justifyContent: 'center' }]}>
                        </View>
                    </View>
                </View>
            </GlobalWrapper>
        )
    }
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    dogTiles: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: -10,
    },
    dogTile: {
        marginTop: 10,
        marginLeft: 10,
        width: '30%',
        height: 150,
        backgroundColor: 'rgba(10, 95, 202, .8)',
        borderRadius: 20,
        // adding shadow
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 3,
        shadowOpacity: .7,
    },
    dogTileImage: {
        borderRadius: 20,
        width: '100%',
        height: 150,
    },
    imagePlaceholder: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
    icon: {
        position: 'absolute',
        top: -10,
        right: -10,
        padding: 3,
        backgroundColor: '#C4C4C4',
        borderRadius: 50,
        // adding shadow
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 3,
        shadowOpacity: 1,
    }
})
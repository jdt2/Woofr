import React, { Component, createRef } from 'react'
import { Text, View, StyleSheet, ActivityIndicator, Animated } from 'react-native'
import { Card, Button, Icon, Image } from 'react-native-elements'
import Swiper from 'react-native-deck-swiper';
import GermanShepard from './../../assets/GermanShepherd.jpg';
import GlobalWrapper from '../../components/GlobalWrapper';

interface MainProps { };
interface MainState {
    index: number,
};

const cards = [
    {
        image: require('./../../assets/GermanShepherd.jpg'),
        name: 'Rocket',
        age: 'Adult',
        type: 'Border Collie',
        distance: '13 mi',
        location: 'Alpharetta, GA'
    },
    {
        image: require('./../../assets/Pembroke-Welsh-Corgi.jpg'),
        name: 'Rocket',
        age: 'Adult',
        type: 'Border Collie',
        distance: '13 mi',
        location: 'Alpharetta, GA'
    },
    {
        image: require('./../../assets/Pembroke-Welsh-Corgi.jpg'),
        name: 'Rocket',
        age: 'Adult',
        type: 'Border Collie',
        distance: '13 mi',
        location: 'Alpharetta, GA'
    },
    {
        image: require('./../../assets/Pembroke-Welsh-Corgi.jpg'),
        name: 'Rocket',
        age: 'Adult',
        type: 'Border Collie',
        distance: '13 mi',
        location: 'Alpharetta, GA'
    },
    {
        image: require('./../../assets/Pembroke-Welsh-Corgi.jpg'),
        name: 'Rocket',
        age: 'Adult',
        type: 'Border Collie',
        distance: '13 mi',
        location: 'Alpharetta, GA'
    },
    {
        image: require('./../../assets/Pembroke-Welsh-Corgi.jpg'),
        name: 'Rocket',
        age: 'Adult',
        type: 'Border Collie',
        distance: '13 mi',
        location: 'Alpharetta, GA'
    }
]

export class Main extends Component<MainProps, MainState> {

    private swiperRef = createRef();

    constructor(props) {
        super(props);

        this.state = {
            index: 0,
        }

        this.onSwiped = this.onSwiped.bind(this);
        this.swipeLeft = this.swipeLeft.bind(this);
        this.swipeRight = this.swipeRight.bind(this);
    }

    onSwiped = () => {
        this.setState({ index: (this.state.index + 1) % cards.length });
    }

    swipeLeft = () => {
        this.swiperRef.current.swipeLeft();
    }

    swipeRight = () => {
        this.swiperRef.current.swipeRight();
    }

    render() {
        // disabling warning b/c react-native-elements can't handle cards
        console.disableYellowBox = true
        return (
            <GlobalWrapper mainApp>
                <View style={styles.container}>
                    <View style={styles.swiperContainer}>
                        <Swiper
                            ref={this.swiperRef}
                            cards={cards}
                            cardIndex={this.state.index}
                            onSwiper={this.onSwiped}
                            stackSize={4}
                            stackScale={10}
                            stackSeparation={14}
                            backgroundColor="transparent"
                            disableTopSwipe
                            disableBottomSwipe
                            animateOverlayLabelsOpacity
                            animateCardOpacity
                            infinite
                            overlayLabels={{
                                left: {
                                    title: 'No :(',
                                    style: {
                                        label: {
                                            backgroundColor: '#D2302C',
                                            color: 'white',
                                            fontSize: 24,
                                        },
                                        wrapper: {
                                            flexDirection: 'column',
                                            alignItems: 'flex-end',
                                            justifyContent: 'flex-start',
                                            marginTop: -30,
                                            marginLeft: -20,
                                        }
                                    }
                                },
                                right: {
                                    title: 'Yes :)',
                                    style: {
                                        label: {
                                            backgroundColor: '#3295E9',
                                            color: 'white',
                                            fontSize: 24,
                                        },
                                        wrapper: {
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            marginTop: -30,
                                            marginLeft: 20,
                                        }
                                    }
                                }
                            }}
                            renderCard={(card: any) =>
                                <Card
                                    image={card.image}
                                    imageProps={
                                        {
                                            PlaceholderContent: <View style={styles.imagePlaceholder} />
                                        }
                                    }
                                    imageWrapperStyle={styles.imageContainer}
                                >
                                    <View style={styles.cardDesc}>
                                        <View style={styles.leftDesc}>
                                            <Text>{card.name}, {card.age}</Text>
                                            <View style={styles.dogDesc}>
                                                <Icon
                                                    name='dog'
                                                    type='font-awesome-5'
                                                    color="black"
                                                    size={15}
                                                />
                                                <Text style={{ alignSelf: 'center', marginLeft: 5, }}>{card.type}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.rightDesc}>
                                            <Text style={{ textAlign: 'right' }}>
                                                {card.distance} away{'\n'}
                                                {card.location}
                                            </Text>
                                        </View>
                                    </View>
                                </Card>
                            }
                        />
                    </View>
                    <View style={styles.buttonGroup}>
                        <Button
                            icon={
                                <Icon
                                    name='times'
                                    type='font-awesome-5'
                                    color='white'
                                    size={30}
                                />
                            }
                            containerStyle={styles.button}
                            buttonStyle={[styles.buttonStyle, { backgroundColor: '#D2302C' }]}
                            onPress={this.swipeLeft}
                        />
                        <Button
                            icon={
                                <Icon
                                    name='heart'
                                    type='font-awesome-5'
                                    color='white'
                                    solid
                                    size={30}
                                />
                            }
                            containerStyle={styles.button}
                            buttonStyle={[styles.buttonStyle, { backgroundColor: '#3295E9' }]}
                            onPress={this.swipeRight}
                        />
                    </View>
                </View>
            </GlobalWrapper >
        )
    }
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imagePlaceholder: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
    imageContainer: {

    },
    leftDesc: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    rightDesc: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    cardDesc: {
        flexDirection: 'row',
    },
    dogDesc: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        alignItems: 'center',
    },
    buttonGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        width: 100,
        borderRadius: 10,
    },
    swiperContainer: {
        flex: 5,

    }
})
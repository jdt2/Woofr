import React, { Component } from 'react'
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import GlobalWrapper from '../../components/GlobalWrapper'
import { Input, Button, Text, ButtonGroup } from 'react-native-elements'
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface SignupProps { }

interface SignupState {
    selectedSizeIndex: number,
    selectedAgeIndex: number,
}

export class SignupPage3 extends Component<SignupProps, SignupState> {

    sizeButtons: any;
    ageButtons: any;

    constructor(props) {
        super(props);

        this.state = {
            selectedAgeIndex: 3,
            selectedSizeIndex: 3,
        };
        this.sizeButtons = ['Small', 'Medium', 'Large', 'N/A'];
        this.ageButtons = ['Young', 'Adult', 'Senior', 'N/A'];

        this.nextPage = this.nextPage.bind(this);
    }

    nextPage() {
        let currUser = this.props.route.params.currUser;
        currUser.sizePrefer = this.sizeButtons[this.state.selectedSizeIndex];
        currUser.agePrefer = this.ageButtons[this.state.selectedAgeIndex];
        this.props.navigation.navigate('SignupPage4', { currUser });
    }

    render() {
        const { sizeButtons, ageButtons } = this;

        return (
            <GlobalWrapper form>
                <View style={styles.container}>
                    <Text style={styles.header}>Find your next pawtner today</Text>
                    <Text style={styles.question}>
                        <Text style={[{ fontFamily: 'ProximaNova-Bold' }, styles.question]}>
                            What are you looking for?
                        </Text>
                        We'll do our best to find dogs that are a match for you
                    </Text>
                    <Text style={styles.question} h1>
                        Size:
                    </Text>
                    <ButtonGroup
                        onPress={(selectedSizeIndex) => { this.setState({ selectedSizeIndex }) }}
                        selectedIndex={this.state.selectedSizeIndex}
                        buttons={sizeButtons}
                        containerStyle={styles.buttonContainer}
                    />
                    <Text style={styles.question} h1>
                        Age:
                    </Text>
                    <ButtonGroup
                        onPress={(selectedAgeIndex) => { this.setState({ selectedAgeIndex }) }}
                        selectedIndex={this.state.selectedAgeIndex}
                        buttons={ageButtons}
                        containerStyle={styles.buttonContainer}
                    />
                    <Button
                        title="Next"
                        containerStyle={styles.button}
                        onPress={this.nextPage}
                    />
                </View>
            </GlobalWrapper>
        )
    }
}

export default SignupPage3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //borderRadius: 20,
        height: '100%',
    },
    header: {
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 20,
    },
    button: {
        position: 'absolute',
        bottom: 20,
    },
    question: {
        paddingLeft: 10,
        fontSize: 24,
        marginTop: 20,
    },
    buttonContainer: {
        borderRadius: 10,
    }
});
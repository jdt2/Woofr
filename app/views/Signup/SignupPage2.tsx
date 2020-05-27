import React, { Component } from 'react'
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import GlobalWrapper from '../../components/GlobalWrapper'
import { Input, Button, Text } from 'react-native-elements'
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface SignupProps {
    navigation: any,
}

interface SignupState {
    looking: boolean,
    giving: boolean,
}

export class SignupPage2 extends Component<SignupProps, SignupState> {

    constructor(props) {
        super(props);

        this.state = {
            looking: false,
            giving: false
        };

        this.nextPage = this.nextPage.bind(this);
    }

    nextPage() {
        let currUser = this.props.route.params.currUser;
        currUser["looking"] = this.state.looking;
        this.props.navigation.navigate("SignupPage3", { currUser });
    }

    render() {
        return (
            <GlobalWrapper form>
                <View style={styles.container}>
                    <Text style={styles.header}>Find your next pawtner today</Text>
                    <Text h1 h1Style={styles.question}>Are you trying to find or give a new friend?</Text>
                    <Button
                        title="Looking"
                        onPress={(e) => { this.setState({ looking: !this.state.looking }) }}
                        titleStyle={!this.state.looking ? styles.questionTitle : styles.questionTitleActive}
                        containerStyle={styles.questionButtonContainer}
                        buttonStyle={styles.questionButton}
                    />
                    <Button
                        title="Giving"
                        onPress={(e) => { this.setState({ giving: !this.state.giving }) }}
                        titleStyle={!this.state.giving ? styles.questionTitle : styles.questionTitleActive}
                        containerStyle={styles.questionButtonContainer}
                        buttonStyle={styles.questionButton}
                    />
                    <Button
                        title="Next"
                        containerStyle={styles.button}
                        onPress={this.nextPage}
                        disabled={!this.state.looking && !this.state.giving}
                    />
                </View>
            </GlobalWrapper>
        )
    }
}

export default SignupPage2

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
        color: '#0A5FCA',
    },
    questionTitle: {
        fontFamily: 'ProximaNova-Regular',
    },
    questionTitleActive: {
        fontSize: 28,
    },
    questionButtonContainer: {
        width: '90%',
        marginTop: 15,
    },
    questionButton: {
        backgroundColor: '#3295E9',
    },
});
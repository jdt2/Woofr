import React, { Component } from 'react'
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native'
import GlobalWrapper from '../../components/GlobalWrapper'
import { Input, Button, Text, ButtonGroup, CheckBox, Divider } from 'react-native-elements'
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface SignupProps { }

interface SignupState {
    checked: Array<boolean>,
    preferences: Array<string>,
}

export class SignupPage4 extends Component<SignupProps, SignupState> {

    constructor(props) {
        super(props);

        this.state = {
            checked: [],
            preferences: ['No preference', 'Bulldog', 'Chihuahau', 'Corgi', 'Poodle', 'Golden Retriever', 'Something else', 'Something else', 'Other']
        };

        let checked = this.state.checked;
        checked.push(true);
        for (let i = 1; i < this.state.preferences.length; i++) {
            checked.push(false);
        }
        this.setState({ checked });

        this.checkPreference = this.checkPreference.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    checkPreference(index: number) {
        let checked = this.state.checked;
        checked[index] = !checked[index];
        this.setState({ checked });
    }

    nextPage() {
        this.props.navigation.navigate('SignupPage5');
    }

    render() {
        const checkboxes = [];
        for (let i = 0; i < this.state.preferences.length; i++) {
            checkboxes.push(
                <CheckBox
                    title={"| " + this.state.preferences[i]}
                    checked={this.state.checked[i]}
                    key={i}
                    onPress={() => this.checkPreference(i)}
                />
            );
        }

        return (
            <GlobalWrapper form>
                <View style={styles.container}>
                    <Text style={styles.header}>Find your next pawtner today</Text>
                    <Text style={styles.question}>
                        <Text style={[styles.question, { fontFamily: 'ProximaNova-Bold', fontSize: 24, }]}>
                            Breed
                        </Text>
                        &nbsp;(Choose out of the list)
                    </Text>
                    <View style={styles.scrollView}>
                        <ScrollView>
                            {checkboxes}
                        </ScrollView>
                    </View>
                    <Button
                        title="Next"
                        containerStyle={styles.button}
                        onPress={this.nextPage}
                    />
                </View>
            </GlobalWrapper >
        )
    }
}

export default SignupPage4

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
        fontSize: 20,
        marginTop: 20,
    },
    buttonContainer: {
        borderRadius: 10,
    },
    scrollView: {
        height: '65%',

    }
});
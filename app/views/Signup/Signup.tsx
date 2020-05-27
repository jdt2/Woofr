import React, { Component } from 'react'
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import GlobalWrapper from '../../components/GlobalWrapper'
import { Input, Button, Text } from 'react-native-elements'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { HitTestResultTypes } from 'expo/build/AR';

interface SignupProps { }

interface SignupState {
    dateVisible: boolean,
    username: String,
    password: String,
    first_name: String,
    last_name: String,
    birthday: Date,
}

export class Signup extends Component<SignupProps, SignupState> {

    constructor(props) {
        super(props);

        this.state = {
            dateVisible: false,
            username: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: null,
        };

        this.openDatePicker = this.openDatePicker.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.confirmDate = this.confirmDate.bind(this);
    }

    openDatePicker() {
        console.log("here");
        Keyboard.dismiss();
        this.setState({ dateVisible: true });
    }

    nextPage() {
        const { username, password, first_name, last_name, birthday } = this.state;
        let currUser = { username, password, first_name, last_name, birthday };
        this.props.navigation.navigate("SignupPage2", { currUser });
    }

    confirmDate(birthday: any) {
        this.setState({ dateVisible: false, birthday: new Date(birthday) });
    }

    render() {
        return (
            <GlobalWrapper form>
                <View style={styles.container}>
                    <Text style={styles.header}>Find your next pawtner today</Text>
                    <Input
                        placeholder="Email Address"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        onChangeText={(username) => this.setState({ username })}
                    />
                    <Input
                        placeholder="First name"
                        onChangeText={(first_name) => this.setState({ first_name })}
                    />
                    <Input
                        placeholder="Last name"
                        onChangeText={(last_name) => this.setState({ last_name })}
                    />
                    <Input
                        placeholder="Password"
                        textContentType="password"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}
                    />
                    <Text style={styles.subtext}>Must include a symbol or number and have at least 8 characters</Text>
                    <TouchableOpacity onPress={this.openDatePicker} activeOpacity={1}>
                        <View pointerEvents="none">
                            <Input
                                placeholder="Birthday (MM/DD/YYYY)"
                                returnKeyType="next"
                                value={this.state.birthday ? `${this.state.birthday.getMonth() + 1}/${this.state.birthday.getDate()}/${this.state.birthday.getFullYear()}` : ''}
                            />
                        </View>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={this.state.dateVisible}
                        mode="date"
                        onConfirm={(date) => { this.confirmDate(date) }}
                        onCancel={() => { this.setState({ dateVisible: false }) }}
                    />
                    <Text style={styles.subtext}>You need to be at least 18. Other people using Woofr won’t see your birthday</Text>
                    <Button
                        title="Next"
                        containerStyle={styles.button}
                        disabled={this.state.username === '' || this.state.password === '' || this.state.first_name === '' ||
                            this.state.last_name === '' || !this.state.birthday}
                        onPress={this.nextPage}
                    />
                </View>
            </GlobalWrapper>
        )
    }
}

export default Signup

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
    logoImage: {
        width: 210,
        height: 210,
        alignSelf: 'center',
    },
    datepicker: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        backgroundColor: 'white'
    },
    subtext: {
        marginTop: -15,
        paddingLeft: 10,
        paddingBottom: 10,
    }
});
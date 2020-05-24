import React, { Component } from 'react'
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import GlobalWrapper from '../../components/GlobalWrapper'
import { Input, Button, Text } from 'react-native-elements'
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface SignupProps { }

interface SignupState {
    dateVisible: boolean
}

export class Signup extends Component<SignupProps, SignupState> {

    constructor(props) {
        super(props);

        this.state = {
            dateVisible: false,
        };

        this.openDatePicker = this.openDatePicker.bind(this);
    }

    openDatePicker() {
        console.log("here");
        Keyboard.dismiss();
        this.setState({ dateVisible: true });
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
                    />
                    <Input
                        placeholder="First name"
                    />
                    <Input
                        placeholder="Last name"
                    />
                    <Input
                        placeholder="Password"
                        textContentType="password"
                        secureTextEntry={true}
                    />
                    <Text style={styles.subtext}>Must include a symbol or number and have at least 8 characters</Text>
                    <TouchableOpacity onPress={this.openDatePicker} activeOpacity={1}>
                        <View pointerEvents="none">
                            <Input
                                placeholder="Birthday (MM/DD/YYYY)"
                                returnKeyType="next"
                            />
                        </View>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={this.state.dateVisible}
                        mode="date"
                        onConfirm={(date) => { }}
                        onCancel={() => { this.setState({ dateVisible: false }) }}
                    />
                    <Text style={styles.subtext}>You need to be at least 18. Other people using Woofr won’t see your birthday</Text>
                    <Button
                        title="Next"
                        containerStyle={styles.button}
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
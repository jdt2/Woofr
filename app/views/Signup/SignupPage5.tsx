import React, { Component } from 'react'
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native'
import GlobalWrapper from '../../components/GlobalWrapper'
import { Input, Button, Text, ButtonGroup, CheckBox, Divider } from 'react-native-elements'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Base64 } from 'js-base64';

interface SignupProps { }

interface SignupState {
}

export class SignupPage5 extends Component<SignupProps, SignupState> {

    constructor(props) {
        super(props);

        console.log(this.props.route.params);

        this.nextPage = this.nextPage.bind(this);
    }

    CreateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    nextPage() {
        let uuid = this.CreateUUID();
        console.log(uuid);
        const { username, first_name, last_name, password, agePrefer, birthday, looking, preferences, sizePrefer } = this.props.route.params.currUser;

        fetch('http://192.168.0.102:3000/user/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: uuid,
                first_name,
                last_name,
                email: username,
                password: Base64.encode(password),
                agePrefer,
                birthday: birthday.toString(),
                looking,
                preferences,
                sizePrefer,
            })
        });
        this.props.navigation.navigate('MainApp');
    }

    render() {

        return (
            <GlobalWrapper form>
                <View style={styles.container}>
                    <Text style={styles.header}>Find your next pawtner today</Text>
                    <Text style={styles.question}>
                        <Text style={[styles.question, { fontFamily: 'ProximaNova-Bold', fontSize: 24, }]}>
                            One Last Note{'\n\n'}
                        </Text>
                        <Text style={[styles.question, { fontSize: 16 }]}>
                            As you dive into this community, please commit to respecting everyone on this app. Be aware of who you share personal information with and be sure to post and send appropriate information and photos. A safe environment for our users will give you and our community a great way to give pets a new home, and it can’t be done without your help!
                        </Text>
                    </Text>
                    <Divider
                        style={styles.divider}
                    />
                    <Text style={styles.accept}>
                        By pressing accept, I also accept to Woofr’s Terms of Service
                    </Text>
                    <Button
                        title="Accept"
                        containerStyle={styles.button}
                        onPress={this.nextPage}
                    />
                </View>
            </GlobalWrapper >
        )
    }
}

export default SignupPage5

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
        paddingHorizontal: 10,
        fontSize: 20,
        marginTop: 20,
        color: 'black',
    },
    divider: {
        height: 2,
        marginTop: 15,
        backgroundColor: '#2979FF',
        marginHorizontal: 10,
    },
    accept: {
        marginTop: 15,
        paddingHorizontal: 10,
        color: 'black',
    }
});
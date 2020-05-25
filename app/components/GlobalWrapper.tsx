import React, { Component } from 'react'
import { Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { ThemeProvider } from 'react-native-elements';
import { homeTheme, formTheme, mainAppTheme, profileTheme, messagesTheme } from './themes';
import { LinearGradient } from 'expo-linear-gradient';

interface WrapperProps {
    form?: Boolean,
    home?: Boolean,
    navbar?: Boolean,
    mainApp?: Boolean,
    profile?: Boolean,
    messages?: Boolean,
}

export class GlobalWrapper extends Component<WrapperProps> {
    constructor(props) {
        super(props);
    }

    render() {
        let currTheme = {};
        if (this.props.form) {
            currTheme = formTheme;
        } else if (this.props.home) {
            currTheme = homeTheme;
        } else if (this.props.mainApp) {
            currTheme = mainAppTheme;
        } else if (this.props.profile) {
            currTheme = profileTheme;
        } else if (this.props.messages) {
            currTheme = messagesTheme;
        }

        return (
            <ThemeProvider theme={currTheme}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    {this.props.children}
                </TouchableWithoutFeedback>
            </ThemeProvider>
        )
    }
}

export default GlobalWrapper

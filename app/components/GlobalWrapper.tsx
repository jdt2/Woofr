import React, { Component } from 'react'
import { Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { ThemeProvider } from 'react-native-elements';
import { homeTheme, formTheme } from './themes';
import { LinearGradient } from 'expo-linear-gradient';

interface WrapperProps {
    form?: Boolean,
    home?: Boolean,
    navbar?: Boolean,
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

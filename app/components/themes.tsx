
const headingText = {
    color: '#0A5FCA',
    fontFamily: 'ProximaNova-Bold',
    fontSize: 30,
};

const regularText = {
    fontFamily: 'ProximaNova-Regular',
    color: '#0A5FCA',
    fontSize: 16
};

export const formTheme = {
    colors: {
        primary: '#0A5FCA',
    },
    Input: {
        labelStyle: {
            fontFamily: 'ProximaNova-Bold',
            fontSize: 18,
            color: '#0A5FCA',
        },
        inputContainerStyle: {
            borderColor: '#0A5FCA',
        },
        inputStyle: {
            color: 'black',
            fontFamily: 'ProximaNova-Bold',
        },
        placeholderTextColor: "rgba(10, 95, 202, 0.39)"
    },
    Text: {
        style: regularText,
        h1Style: headingText,
    },
    Button: {
        buttonStyle: {
            borderRadius: 10,
            paddingVertical: 15,
            backgroundColor: '#DA3647',
        },
        titleStyle: {
            //color: '#2979FF',
            color: 'white',
            fontFamily: 'ProximaNova-Bold',
            fontSize: 24,
        },
        containerStyle: {
            paddingBottom: 5,
            width: '60%',
            alignSelf: 'center',
            // adding the shadow because elements is annoying
            shadowColor: '#000000',
            shadowOffset: {
                width: 0,
                height: 1
            },
            shadowRadius: 5,
            shadowOpacity: .6
        }
    },
    CheckBox: {
        uncheckedColor: '#3295E9',
        checkedColor: '#3295E9',
        textStyle: {
            ...regularText,
            fontSize: 20,
            color: '#3295E9',
        },
        containerStyle: {
            borderWidth: 0,
            backgroundColor: 'white',
            borderBottomWidth: 2,
            borderColor: 'rgba(10, 95, 202, 0.5)',
        }
    }
};

export const homeTheme = {
    Text: {
        style: regularText,
    },
    Button: {
        titleStyle: {
            ...headingText,
            fontSize: 24,
        },
        buttonStyle: {
            borderRadius: 15,
            backgroundColor: 'white',
            marginTop: 10,
            alignSelf: 'stretch',
            height: 60,
        }
    }
};
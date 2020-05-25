import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Button, Icon, Divider } from 'react-native-elements';
import GlobalWrapper from './GlobalWrapper';

interface TabProps {
    state: any,
    descriptors: any,
    navigation: any
}

export class TabBar extends Component<TabProps> {
    render() {
        return (

            <GlobalWrapper>
                <View style={{ backgroundColor: 'white' }}>
                    <Divider style={styles.divider} />
                    <View style={styles.buttons}>
                        {this.props.state.routes.map((route: any, index: number) => {
                            const { options } = this.props.descriptors[route.key];
                            const label =
                                options.tabBarLabel !== undefined
                                    ? options.tabBarLabel
                                    : options.title !== undefined
                                        ? options.title
                                        : route.name;

                            const isFocused = this.props.state.index === index;

                            const onPress = () => {
                                const event = this.props.navigation.emit({
                                    type: 'tabPress',
                                    target: route.key,
                                    canPreventDefault: true,
                                });

                                if (!isFocused && !event.defaultPrevented) {
                                    this.props.navigation.navigate(route.name);
                                }
                            };

                            let iconName = "home";
                            if (index === 0) {
                                iconName = "user";
                            } else if (index === 2) {
                                iconName = "comments"
                            }

                            return (

                                <Button
                                    onPress={onPress}
                                    containerStyle={{ flex: 1, }}
                                    activeOpacity={1}
                                    key={index}
                                    icon={
                                        <Icon
                                            name={iconName}
                                            type="font-awesome-5"
                                            size={30}
                                            solid
                                            color={isFocused ? "#3498D8" : "#71B7E6"}
                                        />
                                    }
                                    type="clear"
                                />
                            );
                        })}
                    </View>
                </View>
            </GlobalWrapper>
        )
    }
}

export default TabBar

const styles = StyleSheet.create({
    divider: {
        height: 2,
        backgroundColor: '#ECECED',
        marginHorizontal: 10,
    },
    buttons: {
        flexDirection: 'row'
    }
})
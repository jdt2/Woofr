import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, ButtonGroup, Divider, ListItem } from 'react-native-elements';
import GlobalWrapper from '../../components/GlobalWrapper';

interface MessagesProps { };

interface MessagesState {
    selectedTab: number,
};

export class Messages extends Component<MessagesProps, MessagesState> {

    constructor(props: MessagesProps) {
        super(props);

        this.state = {
            selectedTab: 0,
        }

        this.updateSelectedTab = this.updateSelectedTab.bind(this);
    }

    updateSelectedTab = (selectedTab: number) => {
        this.setState({ selectedTab });
    }

    render() {
        const tabs = ['Buyer', 'Seller'];

        const messages = [
            {
                name: 'Noah Longhi',
                text: 'Hey let\'s meet up sometime about the exchange',
                image: require('../../assets/stock-photos/asian-neon-boi.jpg')
            },
            {
                name: 'Madeline Parker',
                text: 'Sure, sounds good!',
                image: require('../../assets/stock-photos/girl.jpg')
            },
            {
                name: 'Stephanio Luo',
                text: 'When are you available?',
                image: require('../../assets/stock-photos/smiling-boi.jpg')
            }
        ];

        return (
            <GlobalWrapper messages>
                <View style={styles.container}>
                    <ButtonGroup
                        onPress={this.updateSelectedTab}
                        selectedIndex={this.state.selectedTab}
                        buttons={tabs}
                        containerStyle={styles.buttonGroup}
                        textStyle={styles.buttonGroupText}
                    />
                    <View style={styles.listItemContainer}>
                        {this.state.selectedTab === 0 ?
                            messages.map((item, i) => (
                                <ListItem
                                    key={i}
                                    title={item.name}
                                    subtitle={item.text}
                                    leftAvatar={{ source: item.image, size: 50, placeholderStyle: styles.imagePlaceholder }}
                                    containerStyle={styles.listItem}
                                    style={{ marginTop: 10, }}
                                    subtitleStyle={styles.listItemSubtitle}
                                    titleStyle={styles.listItemTitle}
                                    subtitleProps={{ numberOfLines: 1 }}
                                    badge={{
                                        status: 'primary',
                                        containerStyle: styles.listItemBadgeContainer,
                                        badgeStyle: styles.listItemBadge,
                                    }}
                                    onPress={() => { }}
                                    bottomDivider
                                />
                            ))
                            :
                            <></>
                        }
                    </View>
                </View>
            </GlobalWrapper>
        )
    }
}

export default Messages

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    imagePlaceholder: {
        backgroundColor: '#F7F8F8',
        width: '100%',
        height: '100%',
    },
    buttonGroup: {
        height: 50,
        marginHorizontal: 50,
        borderRadius: 15,
    },
    buttonGroupText: {
        fontSize: 30,
    },
    listItemContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
    },
    listItem: {
        width: '100%',
        backgroundColor: '#F7F8F8',
        //paddingTop: 10,
        //marginTop: 10,
    },
    listItemTitle: {
        textAlign: 'left',
    },
    listItemSubtitle: {
        marginTop: 10,
        textAlign: 'left',
        color: '#0A5FCA',
    },
    listItemBadgeContainer: {
        width: 20,
        position: 'absolute',
        top: 10,
        right: 5,
    },
    listItemBadge: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: '#71B7E6'
    }
})
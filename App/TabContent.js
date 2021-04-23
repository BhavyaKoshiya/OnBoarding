import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Touchable, ImageBackground, Keyboard } from "react-native";
import { TabItem } from './Component/tabItem';
import { dashboardIcon, deleteIcon, editIcon, homeIcon, userIcon } from './assets/icon/index';


export function TabContent({ state, navigation }) {


    const activeIndex = state.index;

    // {/*Listener To hide Bottom Tab Navigator when keyBoard Opens*/}

    //  console.log(activeIndex);
    // const [isVisible, setIsVisible] = useState(true);
    // const _keyboardDidShow = useCallback(() => {
    //     setIsVisible(false);
    // }, [navigation]);

    // const _keyboardDidHide = useCallback(() => {
    //     setIsVisible(true);
    // }, [navigation]);

    // useEffect(() => {
    //     Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    //     Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    //     return () => {
    //         Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
    //         Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    //     };
    // }, [_keyboardDidHide, _keyboardDidShow]);


    return (

        //{/*Remove Following Comment if You wanna use Bottom Tab Navigation*/}

        // (isVisible) ?
        <View style={styles.container}>

            <TabItem
                onPress={() => {
                    navigation.navigate('Home')
                }}
                source={homeIcon}
                title='Home'
                isActive={activeIndex === 0}

            />
            <TabItem
                onPress={() => {
                    navigation.navigate('Profile')
                }}
                source={userIcon}
                title='Profile'
                isActive={activeIndex === 1}

            />

            <View style={styles.spaceDivider} />

            <TabItem
                onPress={() => {
                    navigation.navigate('Dashboard')
                }}
                source={dashboardIcon}
                title='Dashboard'
                isActive={activeIndex === 2}
            />

            <View style={styles.spaceDivider} />
        </View> //: null
    );
}


const styles = StyleSheet.create({

    container: {
        flexDirection: 'row'
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff'
    },
    tabContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    tabIcon: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
        marginRight: 10,
        tintColor: '#000',
        paddingHorizontal: 20

    },
    tabTitle: {
        fontSize: 18,

    },
    spaceDivider: {
        height: 15,
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: 'lightgrey'
    },
    imageContainer: {

        height: 85,
        width: 85,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: '#9a09ff',
        borderRadius: 85,
        marginTop: 20

    },
    image: {

        height: 80,
        width: 80,
        borderRadius: 80,
    },

})
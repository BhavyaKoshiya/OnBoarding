import React from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
import { Computer, Creditcard, Customize, Notification } from "./assets/images/Index";
import { OnBoarding } from "./Component/Onboarding";



export default function Home({ navigation }) {
    const slides = [
        {
            id: '1',
            title: 'Quick & Easy Payments',
            description: 'Grow your business by accepting card payments with the new card reader.',
            // description:()=><Button title='hey'/>,
            image: Creditcard,
        },
        {
            id: '2',
            title: 'Smart Point of Sale',
            description: 'Complete point of sale software tailored to your business needs.!',
            image: Computer,
        },
        {
            id: '3',
            title: 'Instant Notifications',
            description: 'Instant notifications let you quickly see new purchases and messages.',
            image: Notification,

        },
        {
            id: '4',
            title: 'Customize Everything',
            description: 'Adjust your system to speed up your checkout.',
            image: Customize,
        },

    ]

    return (
        <SafeAreaView style={styles.container}>

            <OnBoarding
                data={slides}
                nextButton
                previousButton
                buttonIcon
                // activeDotWidth={10}
                // dotStyle={{backgroundColor:'red'}}
                onSkip={() => {console.log('skip')}}
                buttonStyle={{ width: '40%' }}
                onFinish={() => {console.log('LAst')}}
                buttonTextStyle={{ fontWeight: 'bold', }}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
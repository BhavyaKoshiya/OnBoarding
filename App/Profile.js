import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Profile(props) {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >

            <Text>Profile</Text>


            <TouchableOpacity
                style={{ marginTop: 50 }}

                onPress={() => {
                    props.navigation.navigate('Home')
                }}>

                <Text>🏡</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ marginTop: 50 }}

                onPress={() => {
                    props.navigation.navigate('Dashboard')
                }}>
                <Text>Dashboard</Text>
            </TouchableOpacity>
        </View>
    )
}
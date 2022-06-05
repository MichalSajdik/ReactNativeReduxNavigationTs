import {StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import {useDispatch} from "react-redux";
import {incrementCounter} from "../store/actions/counter";
import React, {useEffect} from "react";
import {RootTabScreenProps} from "../types";

export default function TabTwoScreen({navigation}: RootTabScreenProps<'TabTwo'>) {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(incrementCounter(1))
            console.log("Is called every time we focus this page")

        });

        return unsubscribe;
    }, [navigation]);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <EditScreenInfo path="/screens/TabTwoScreen.tsx"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

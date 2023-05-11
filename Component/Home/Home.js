import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
    return (
        <View>
            <Text style={styles.title}> HOME PAGE 222 </Text>
        </View>
    )
};
export default Home;

const styles = StyleSheet.create({
    title: {
        color: "blue",
        fontSize: 30,
        fontWeight: "bold"
    }
})
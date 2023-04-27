import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [newCount, setNewCount] = useState(0);


    useEffect(() => {
        console.log(`useEffect called ${count}`);
        return () => {
            console.log("clean up");
        }
    }, [count]);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{`count: ${count}`}</Text>
            <Button color="red" title="Increase the count" onPress={() => {
                setCount (count + 1);
            }} />
            <Button color="blue" title="Decrease the count" onPress={() => {
                setCount (count - 1);
            }} />
             <Button color="red" title="Increase the new count" onPress={() => {
                setNewCount (newCount + 1);
            }} />
            <Button color="blue" title="Decrease the new count" onPress={() => {
                setNewCount (newCount - 1);
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange",
    },
    title: {
        fontSize: 25,
        alignSelf: "center",
        marginTop: 25
    },

})

export default Counter;
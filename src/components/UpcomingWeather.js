import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const UpcomingWeather = () => {
    return(
        <View style={styles.contianer}>
            <Text>Upcoming Weather</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    contianer: {
        backgroundColor: 'pink',
        flex: 1,
        padding: 50
    }
});
export default UpcomingWeather;
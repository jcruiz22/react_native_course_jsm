import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MovieDetails = () => {
    return (
        <View style={styles.container}>
            <Text>Movie Details Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MovieDetails;
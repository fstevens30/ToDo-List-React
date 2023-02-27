import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.circle}/>
            <View style={styles.itemRight}>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#F1FAEE',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 7,},
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },

    circle: {
        width: 20,
        height: 20,
        backgroundColor: '#A8DADC',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    itemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },


});

export default Task;
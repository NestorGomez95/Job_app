import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const JobList = ({ jobs, onJobSelect }) => {
    <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onJobSelect(item)}>
                <View>
                    <Text>{item.title}</Text>
                    <Text>{item.location}</Text>
                    <Text>{item.salary}</Text>
                </View>
            </TouchableOpacity>
            )}
        />
    };

export default JobList;
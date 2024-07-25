
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import JobItem from '../components/JobItem';
import { fetchJobs } from '../services/api';

const JobListScreen = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs().then(data => setJobs(data));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <JobItem job={item} onPress={() => navigation.navigate('JobDetail', { jobId: item._id })} />
        )}
      />
      <Button title="Add Job" onPress={() => navigation.navigate('AddJob')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default JobListScreen;

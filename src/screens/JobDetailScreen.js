
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchJobById } from '../services/api';

const JobDetailScreen = ({ route }) => {
  const { jobId } = route.params;
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetchJobById(jobId).then(data => setJob(data));
  }, [jobId]);

  if (!job) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text>{job.location}</Text>
      <Text>{job.salary}</Text>
      <Text>{job.description}</Text>
      <Text>{job.tags.join(', ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default JobDetailScreen;

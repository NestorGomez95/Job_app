import axios from 'axios';

const API_URL = 'http://10.0.2.2:3000'; // Ajusta esto según tu configuración

export const fetchJobs = async () => {
  try {
    const response = await axios.get(`${API_URL}/jobs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};

export const fetchJobById = async (jobId) => {
  try {
    const response = await axios.get(`${API_URL}/jobs/${jobId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching job:', error);
    return null;
  }
};

export const addJob = async (job) => {
  try {
    const response = await axios.post(`${API_URL}/jobs`, job);
    return response.data;
  } catch (error) {
    console.error('Error adding job:', error);
  }
};

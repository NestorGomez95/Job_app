


import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const uri = 'mongodb+srv://neragoro95:Lemichu2021@cluster0.qndtpre.mongodb.net/jobsDB?retryWrites=true&w=majority';
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

const jobSchema = new mongoose.Schema({
  title: String,
  location: String,
  salary: String,
  description: String,
  tags: [String]
});

const Job = mongoose.model('Job', jobSchema);

// Endpoint para obtener todas las vacantes
app.get('/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Endpoint para agregar una vacante
app.post('/jobs', async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.status(201).send(job);
});

// Endpoint para eliminar una vacante
app.delete('/jobs/:id', async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

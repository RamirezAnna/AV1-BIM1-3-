import express from 'express';
import { getAllProjects, findProjectById, createProject, addTaskToProject } from './data.js';

const app = express();
app.use(express.json());

// Logger
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl}`);
  next();
});

// GET /projects -> lista
app.get('/projects', (req, res) => {
  return res.status(200).json(getAllProjects());
});

// GET /projects/:id -> obter
app.get('/projects/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) return res.status(400).json({ error: 'ID inválido' });
  const project = findProjectById(id);
  if (!project) return res.status(404).json({ error: 'Projeto não encontrado' });
  return res.status(200).json(project);
});

// POST /projects -> criar
app.post('/projects', (req, res) => {
  const { title, description } = req.body || {};
  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'title é obrigatório.' });
  }
  const project = createProject({ title, description });
  return res.status(201).json(project);
});

// POST /projects/:id/tasks -> adicionar task
app.post('/projects/:id/tasks', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) return res.status(400).json({ error: 'ID inválido' });
  const { task } = req.body || {};
  if (!task || typeof task !== 'string' || task.trim() === '') {
    return res.status(400).json({ error: 'task é obrigatória.' });
  }
  const updated = addTaskToProject(id, task);
  if (!updated) return res.status(404).json({ error: 'Projeto não encontrado' });
  return res.status(201).json(updated);
});

export default app;

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}

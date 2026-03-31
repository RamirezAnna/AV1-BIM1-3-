// Dados e funções exportadas (módulo simples)
let projects = [
  { id: 1, title: 'Projeto Alpha', description: 'Primeiro projeto', tasks: [] },
  { id: 2, title: 'Projeto Beta', description: 'Segundo projeto', tasks: [] }
];
let nextId = 3;

export function getAllProjects() {
  return projects;
}

export function findProjectById(id) {
  return projects.find(p => p.id === id) || null;
}

export function createProject({ title, description = '' }) {
  const project = { id: nextId++, title: String(title).trim(), description: String(description).trim(), tasks: [] };
  projects.push(project);
  return project;
}

export function addTaskToProject(id, task) {
  const project = findProjectById(id);
  if (!project) return null;
  project.tasks.push(String(task).trim());
  return project;
}

export function updateProject(id, data) {
  const project = projects.find(p => p.id === id);
  if (!project) return null;

  if (data.title !== undefined) {
    project.title = String(data.title).trim();
  }

  if (data.description !== undefined) {
    project.description = String(data.description).trim();
  }

  return project;
}

export function deleteProject(id) {
  const index = projects.findIndex(p => p.id === id);
  if (index === -1) return false;

  projects.splice(index, 1);
  return true;
}

// For testing/reset purposes (not exported by default)
export function _resetData() {
  projects = [
    { id: 1, title: 'Projeto Alpha', description: 'Primeiro projeto', tasks: [] },
    { id: 2, title: 'Projeto Beta', description: 'Segundo projeto', tasks: [] }
  ];
  nextId = 3;
}

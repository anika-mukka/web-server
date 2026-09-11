import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, web!');
});

app.get('/about', (req, res) => {
  res.send('Happy FDOC!!!');
});

const projects = [
  { name: 'Weather app', tag: 'javascript' },
  { name: 'Portfolio site', tag: 'express' },
  { name: 'Budget tracker', tag: 'python' },
];

app.get('/projects', (req, res)  => {
  const tag = req.query.tag;
  // filter `projects` here, based on your decision above
  if (!tag) {
    return res.send(projects)
  }

    const filteredProjects = projects.filter(project => project.tag == tag);

    if (filteredProjects.length == 0){
      return res.send("No tags match this search")
    }
    res.send(filteredProjects)

}); 



app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

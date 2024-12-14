import FloatingProjects from '../components/FloatingProjects';

const projectData = [
  {
    image: "https://via.placeholder.com/300",
    title: 'Project 1',
    description: 'This is the first project.',
  },
  {
    image: "https://via.placeholder.com/300",
    title: 'Project 2',
    description: 'This is the second project.',
  },
  {
    image: "https://via.placeholder.com/300",
    title: 'Project 3',
    description: 'This is the third project.',
  },
];

function App() {
    return (
      <FloatingProjects projects={projectData} />
    );
  }
  
  export default App;

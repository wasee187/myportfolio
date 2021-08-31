import Intro from '../../component/intro/Intro';
import Services from '../../component/services/Services';
import About from '../../component/about/About';
import Work from '../../component/work/Work';
import Achievement from '../../component/achievement/achivement';

import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get('/projects');
      setProjects(res.data);
    };
    fetchProjects();
  }, []);
  return (
    <div>
      <Intro />
      <Services />
      <About />
      <Work projects={projects} />
      <Achievement />
    </div>
  );
}

export default Home;

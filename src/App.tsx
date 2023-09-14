import * as React from 'react';
import './styles.css'; // Import your CSS here
import './styles.scss'; // Import your SCSS here
import { Routes, Route } from 'react-router-dom';
import ProjectContainer from './components/ProjectContainer';
import MainContainer from './components/containers/MainContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<MainContainer />} />
          <Route path='/repo' element={<ProjectContainer />} />
        </Routes>
      </div>
    );
  }
}

export default App;

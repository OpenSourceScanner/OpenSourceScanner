import * as React from 'react';
import ProjectContainer from './components/ProjectContainer';
import './styles.css'; // Import your CSS here
import './styles.scss'; // Import your SCSS here

class App extends React.Component {
  render() {
    return (
      <div>
        <ProjectContainer />
      </div>
    );
  }
}

export default App;

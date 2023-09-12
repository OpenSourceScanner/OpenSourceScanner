import * as React from 'react';

interface Props {
  name: string;
}

const App: React.FC<Props> = ({ name }) => {
  return (
    <>
      <h1>Hello {name}</h1>
    </>
  );
};

export default App;

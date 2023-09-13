import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { RootState } from '../../store';
import { technologiesDropdownSlice } from '../../features/technologiesDropdownSlice';
import ListItemText from '@mui/material/ListItemText';
import projectNameSlice from '../../features/projectNameSlice';

// A list of all the technologies that will be used in the technologies dropdown
// in alphabetical order, if you wish to add more technologies to the dropdown

const technologies = [
  'Android',
  'Angular',
  'Angular CLI',
  'Ansible',
  'Arduino',
  'ASP.NET',
  'AWS',
  'Azure',
  'Babel',
  'Bootstrap',
  'C#',
  'C++',
  'Cassandra',
  'Chef',
  'CircleCI',
  'Couchbase',
  'CouchDB',
  'Create React App',
  'CSS',
  'Cypress',
  'Django',
  'Docker',
  'DynamoDB',
  'Elastic Stack',
  'Elasticsearch',
  'Electron',
  'Ember.js',
  'Enzyme',
  'ESLint',
  'Express',
  'Expo',
  'Firebase',
  'Flask',
  'Flume',
  'Flutter',
  'Gatsby',
  'Git',
  'GitHub',
  'GitLab',
  'Go',
  'Gradle',
  'Grails',
  'GraphQL',
  'Gulp',
  'Hadoop',
  'Helm',
  'HTML',
  'Ionic',
  'iOS',
  'Java',
  'JavaScript',
  'Jenkins',
  'Jest',
  'jQuery',
  'JRuby',
  'JUnit',
  'Kafka',
  'Keras',
  'Kotlin',
  'Kubernetes',
  'Laravel',
  'Less',
  'Lua',
  'Magento',
  'Maven',
  'Meteor',
  'Mocha',
  'MongoDB',
  'MySQL',
  'NativeScript',
  'Neo4j',
  'NGINX',
  'Node.js',
  'npm',
  'Objective-C',
  'OCaml',
  'Perl',
  'PHP',
  'PostgreSQL',
  'PowerShell',
  'Prettier',
  'Processing',
  'Puppet',
  'Python',
  'R',
  'React',
  'React Native',
  'Redux',
  'Ruby',
  'Ruby on Rails',
  'Rust',
  'Sass',
  'Scala',
  'Selenium',
  'Sentry',
  'Sinon',
  'Spark',
  'Spring',
  'SQL Server',
  'Storybook',
  'Swift',
  'Symfony',
  'TensorFlow',
  'Terraform',
  'TestCafe',
  'TypeScript',
  'Unity',
  'Vagrant',
  'Vue.js',
  'Webpack',
  'WordPress',
  'Xamarin',
  'Yarn',
  'Yii',
  'Zend',
  'Zustand',
];

// This is boilerplate from MUI's site for a multi-select dropdown.
// I think it is for theming purposes.
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// using the handleChange function to update the state of the technologiesDropdownSlice
const ProjectSearchContainer: React.FC<{}> = () => {
  const dispatch = useDispatch;
  const theme = useTheme;

  // creating the states for each of the dropdowns and the text field
  const [technologyName, setTechnologyName] = React.useState<string[]>([]);

  const [projectName, setProjectName] = React.useState<string>('');

  const [stars, setStars] = React.useState<string>('');

  const [forks, setForks] = React.useState<string>('');

  const [size, setSize] = React.useState<string>('');

  // setting the values of the text field when they are updated
  // and reflecting that in the input field
  const handleNameChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setProjectName(
      // On autofill we get a stringified value.
      value
    );
  };

  // setting the values of the dropdowns when they are selected to update the
  // state while reflecting the change in the dropdowns.
  const handleTechnologyChange = (
    event: SelectChangeEvent<typeof technologyName>
  ) => {
    const {
      target: { value },
    } = event;
    setTechnologyName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleStarsChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setStars(value);
  };

  const handleForksChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setForks(value);
  };

  const handleSizeChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setSize(value);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            id='outlined-basic'
            label='Project Name'
            variant='outlined'
            fullWidth
            size='medium'
            onChange={handleNameChange}
            value={projectName}
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant='contained' fullWidth size='large'>
            Submit
          </Button>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id='technologiesDropdownLabel'>Technologies</InputLabel>
            <Select
              labelId='technologiesDropdown'
              id='technologiesDropdown'
              multiple
              value={technologyName}
              input={<OutlinedInput label='Technologies' />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
              onChange={handleTechnologyChange}
              fullWidth
            >
              {technologies.map((technology) => (
                <MenuItem key={technology} value={technology}>
                  <Checkbox checked={technologyName.indexOf(technology) > -1} />
                  <ListItemText primary={technology} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl fullWidth>
            <InputLabel id='starsDropdownLabel'>Stars</InputLabel>
            <Select
              labelId='starsDropdownLabel'
              id='starsDropdown'
              label='Stars'
              fullWidth
              placeholder='stars'
              value={stars}
              onChange={handleStarsChange}
            >
              <MenuItem value={0}>Any</MenuItem>
              <MenuItem value={50}>50+</MenuItem>
              <MenuItem value={100}>100+</MenuItem>
              <MenuItem value={500}>500+</MenuItem>
              <MenuItem value={1000}>1000+</MenuItem>
              <MenuItem value={5000}>5000+</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl fullWidth>
            <InputLabel id='forksDropdownLabel'>Forks</InputLabel>
            <Select
              labelId='forksDropdownLabel'
              id='forksDropdown'
              label='Forks'
              fullWidth
              placeholder='forks'
              value={forks}
              onChange={handleForksChange}
            >
              <MenuItem value={0}>Any</MenuItem>
              <MenuItem value={50}>50+</MenuItem>
              <MenuItem value={100}>100+</MenuItem>
              <MenuItem value={500}>500+</MenuItem>
              <MenuItem value={1000}>1000+</MenuItem>
              <MenuItem value={5000}>5000+</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl fullWidth>
            <InputLabel id='sizeDropdownLabel'>Size(MB)</InputLabel>
            <Select
              labelId='sizeDropdownLabel'
              id='sizeDropdown'
              label='Size(MB)'
              fullWidth
              placeholder='Repository Size'
              value={size}
              onChange={handleSizeChange}
            >
              <MenuItem value={0}>Any</MenuItem>
              <MenuItem value={1000}>1MB</MenuItem>
              <MenuItem value={10000}>10MB+</MenuItem>
              <MenuItem value={50000}>50MB+</MenuItem>
              <MenuItem value={100000}>100MB+</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectSearchContainer;

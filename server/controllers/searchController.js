const axios = require('axios');


const searchController = {};
searchController.test = async (req, res, next) => {
  try {
    // declare url variable
    const githubUrl = `https://api.github.com/search/repositories?q=`;
    
    // add join functionality later
    // if req.body.name.length is zero, return next(err)
    if (req.body.name.length === 0 || req.body.techArray.length === 0) return next("Please enter text in the name field");

    // building URL from the req.body object
    // technologies in req body as string
    // iterate through technologies object in req body to add topics filters
    for (let i = 0; i < req.body.technologyObj; i++) {
      githubUrl += `topic:${req.body.technologyObj.name}+`
    }

    // iterate through technologies object in req body to add readme filters
    for (let i = 0; i < req.body.technologyObj; i++) {
      githubUrl += `${req.body.technologyObj.name}+`;
    }
    githubUrl += 'in:readme+';

    // take the name from req body and concatenate to url
    githubUrl += `${req.body.name}`;

    // stars in req body as string
      // options: 0+, 50, 100, 500, 1000, 5000
    githubUrl += `${req.body.stars}`;

    // forks in req body as string
      // options: same as stars
    githubUrl += `${req.body.forks}`;

    // size in req body as string (in kb)
      // options: 0+, 1000kb, 10000kb, 50000kb, 100000kb
    githubUrl += `${req.body.size}`;
    
    // fetch data from repository endpoint w/ parameters in the request body
    // this fetch gives repo data (ex. stars, name, tech stack, forks)
    const data = await axios.get('https://api.github.com/search/repositories?q=python+sql+in:readme+stars:>2000+NOT awesome+NOT list+NOT tutorial+NOT interview+NOT roadmap&sort=stars&order=desc&per_page=10', {
      // headers: {
      //   'Authorization': 'token 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',
      // },
    })

    // declaring constant repos and assigning it the items in the data array
    const repos = data.data.items;

    // declaring repo array to send back to user
    const validReposArray = [];

    //filter out repos with description containing non-english chars and emojis
    const englishRepos = repos.filter(repo => 
      !/[^\x00-\x7F]/.test(repo.description)
    );
    
    //iterate over repos array and 
    for (let i = 0; i < englishRepos.length; i++) {
      // current element tracking
      console.log("THIS IS THE CURRENT ELEMENT: ", i);

      // get full name from item
      const fullName = englishRepos[i].full_name;
      const license = englishRepos[i].license ? englishRepos[i].license.key : null;
      const description = englishRepos[i].description;
      const url = englishRepos[i].svn_url;
      const size = englishRepos[i].size;
      const stars = englishRepos[i].stargazers_count;
      const language = englishRepos[i].language;
      const forks = englishRepos[i].forks_count;
      const watchers = englishRepos[i].watchers;
      const open_issues = englishRepos[i].open_issues;
      const topics = englishRepos[i].topics;

      // declaring constant repoObj and assigning it an object with all information from item
      const repoObj = { fullName, license, description, url, size, stars, language, forks, watchers, open_issues, topics };
      
     //push repoObj into an array
      validReposArray.push(repoObj);

    }

    // store current array w/ valid repos into res.locals.validReposArray
    res.locals.validReposArray = validReposArray;

    // Testing to see if the data works
    console.log('This is our valid repos array: ', res.locals.validReposArray);

    return next();

  } catch(err) {
    return next({
        log: 'Express global error handler caught unknown middleware error',
        status: 500,
        message: { err: `An error occurred: ${err}` },
    })
  }

}

module.exports = searchController;



/*


// https://api.github.com/search/repositories?q=language:javascript&javascript+react+mongodb+typescript+in:readme+stars:>2000&sort=stars&+NOT awesome+NOT list+NOT tutorial+NOT interview+NOT roadmap&sort=stars&order=desc
// https://api.github.com/search/repositories?q=javascript+react+mongodb+typescript+in:readme+stars:>2000+NOT awesome+NOT list+NOT tutorial+NOT interview+NOT roadmap&sort=stars&order=desc&per_page=10


// CURRENT LINK THAT WORKS AS INTENDED
// https://api.github.com/search/repositories?q=topic:javascript+topic:react+javascript+react+in:readme+stars:>2000+NOT awesome+NOT list+NOT tutorial+NOT camp+NOT roadmap&sort=stars&order=desc&per_page=30
const englishRepos = repos.filter(repo => 
  !/[^\x00-\x7F]/.test(repo.description)
);

FIELDS TO SEND BACK:
- name
- full_name
- owner (taken from full_name)
- license.key (nested object)
- description
- svn_url
- size
- stargazers_count
- language
- forks_count
- watchers
- open_issues
- topics

- type+in:name+

MISSING:
- README (Another middleware fetch request)
*/
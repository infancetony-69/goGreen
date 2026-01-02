import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const path = "./data.json";

// Configure Git user
const git = simpleGit();
await git.addConfig('user.name', 'infancetony-69');
await git.addConfig('user.email', 'fullstacktony.69@gmail.com');

const makeCommits = (n) => {
  if (n === 218) {
    console.log('All 218 commits created successfully!');
    return git.push();
  }
  
  // Start date: May 30, 2025 + n days
  const date = moment('2025-05-30')
    .add(n, 'd')
    .format();

  const data = {
    date: date,
  };
  
  console.log(`Creating commit ${n + 1}/218: ${date}`);
  
  jsonfile.writeFile(path, data, () => {
    git.add([path])
      .commit(date, { '--date': date }, makeCommits.bind(this, n + 1));
  });
};

// Start from day 0 (May 30, 2025) to day 217 (Jan 2, 2026)
// Total: 218 days
makeCommits(0);

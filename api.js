export default async (req, res) => {
  const username = 'lumiere-MULAGWA';
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const repos = await response.json();

  let totalCommits = 0;
  for (const repo of repos) {
    const repoResponse = await fetch(`https://api.github.com/repos/${username}/${repo.name}/commits`);
    const commits = await repoResponse.json();
    totalCommits += commits.length;
  }

  res.status(200).json({ totalCommits });
};

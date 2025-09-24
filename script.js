// Dummy data for demonstration
const repositories = [
  {
    name: "cpp-programming",
    description: "C++ programs and algorithms.",
    issues: [
      { title: "Add sorting algorithms", status: "open" },
      { title: "Fix bug in factorial function", status: "closed" }
    ]
  },
  {
    name: "FunelGao",
    description: "Funel project for experimenting with JS.",
    issues: [
      { title: "Feature request: dark mode", status: "open" }
    ]
  },
  {
    name: "BitWord",
    description: "A bitwise word manipulation library.",
    issues: [
      { title: "Update documentation", status: "open" },
      { title: "Optimize bit shifting", status: "closed" }
    ]
  }
];

function renderRepos(repos) {
  const repoList = document.getElementById("repo-list");
  repoList.innerHTML = "";
  repos.forEach((repo, idx) => {
    const card = document.createElement("div");
    card.className = "repo-card";
    card.innerHTML = `<div class="repo-title">${repo.name}</div>
                      <div>${repo.description}</div>
                      <div>Issues: ${repo.issues.length}</div>`;
    card.onclick = () => showIssues(idx);
    repoList.appendChild(card);
  });
}

function showIssues(idx) {
  document.getElementById("repo-list").classList.add("hidden");
  document.getElementById("issue-section").classList.remove("hidden");
  const repo = repositories[idx];
  document.getElementById("repo-title").textContent = repo.name + " Issues";
  const issueList = document.getElementById("issue-list");
  issueList.innerHTML = "";
  repo.issues.forEach(issue => {
    const li = document.createElement("li");
    li.textContent = `${issue.title} [${issue.status}]`;
    issueList.appendChild(li);
  });
}

document.getElementById("backBtn").onclick = function() {
  document.getElementById("repo-list").classList.remove("hidden");
  document.getElementById("issue-section").classList.add("hidden");
};

document.getElementById("searchBtn").onclick = function() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = repositories.filter(repo =>
    repo.name.toLowerCase().includes(query) ||
    repo.description.toLowerCase().includes(query)
  );
  renderRepos(filtered);
};

// Initial render
renderRepos(repositories);
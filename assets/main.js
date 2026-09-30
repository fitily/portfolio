const projectGrid = document.querySelector("#project-grid");
const projectStatus = document.querySelector("#project-status");
const projectSearch = document.querySelector("#project-search");
const currentYear = document.querySelector("#current-year");
const curatedRepositories = [
    {
        owner: "fitily",
        name: "data-analyst-BI-MHM",
        displayName: "Analyse de données BI — MHM",
        description: "Analyse de données : extraction, transformation (ETL), visualisation et création de tableaux de bord."
    },
    {
        owner: "Ygnastixx",
        name: "site-cerise-backend",
        displayName: "Site Cerise — Backend",
        description: "Développement de la partie backend d’un site web pour un club de robotique."
    },
    {
        owner: "TiahMHeranto",
        name: "ambitious-crew-project",
        displayName: "Novapedia",
        description: "Conception de Novapedia, une encyclopédie collaborative innovante inspirée de Wikipédia."
    },
    {
        owner: "fitily",
        name: "portfolio",
        displayName: "Portfolio personnel",
        description: "Portfolio personnel présentant mon parcours, mes compétences et mes projets."
    },
    {
        owner: "fitily",
        name: "algo-learn-tocode",
        displayName: "Apprentissage de l’algorithmique",
        description: "Exercices d’algorithmique réalisés à l’American Corner pour apprendre les bases de la programmation."
    }
];
let projects = curatedRepositories.map(({ owner, name, displayName, description }) => ({
    name,
    displayName,
    full_name: `${owner}/${name}`,
    html_url: `https://github.com/${owner}/${name}`,
    description
}));

currentYear.textContent = new Date().getFullYear();

function renderProjects(query = "") {
    const normalizedQuery = query.trim().toLowerCase();
    const matchingProjects = projects.filter((project) => {
        const searchableText = `${project.displayName || project.name} ${project.name} ${project.description || ""} ${project.language || ""}`.toLowerCase();
        return searchableText.includes(normalizedQuery);
    });

    projectGrid.replaceChildren();
    projectStatus.textContent = matchingProjects.length
        ? `${matchingProjects.length} projet${matchingProjects.length > 1 ? "s" : ""} affiché${matchingProjects.length > 1 ? "s" : ""}`
        : "Aucun projet ne correspond à cette recherche.";

    matchingProjects.forEach((project) => {
        const card = document.createElement("article");
        card.className = "project-card";

        const top = document.createElement("div");
        top.className = "project-card-top";
        const language = document.createElement("span");
        language.textContent = project.language || "Dépôt GitHub";
        top.append(language);
        if (project.stargazers_count != null) {
            const starCount = document.createElement("span");
            starCount.textContent = `★ ${project.stargazers_count}`;
            top.append(starCount);
        }

        const title = document.createElement("h3");
        title.textContent = project.displayName || project.name.replaceAll("-", " ").replaceAll("_", " ");

        const description = document.createElement("p");
        description.textContent = project.description || "Description à venir.";

        const bottom = document.createElement("div");
        bottom.className = "project-card-bottom";
        const updated = document.createElement("span");
        updated.textContent = project.pushed_at
            ? `Mis à jour · ${new Date(project.pushed_at).toLocaleDateString("fr-FR", { month: "short", year: "numeric" })}`
            : project.full_name;
        const link = document.createElement("a");
        link.href = project.html_url;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.textContent = "Explorer ↗";
        bottom.append(updated, link);

        card.append(top, title, description, bottom);
        projectGrid.append(card);
    });
}

projectSearch.addEventListener("input", (event) => renderProjects(event.target.value));
renderProjects();

Promise.all(curatedRepositories.map(async ({ owner, name }) => {
    try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${name}`);
        return response.ok ? await response.json() : null;
    } catch {
        return null;
    }
})).then((repositories) => {
    projects = projects.map((project, index) => ({
        ...project,
        ...(repositories[index] || {}),
        description: project.description || repositories[index]?.description,
        displayName: project.displayName
    }));
    renderProjects(projectSearch.value);
});
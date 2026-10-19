import { computed, onMounted, onUnmounted, ref, shallowRef } from "vue";
import { translations } from "./translations";

const curatedProjects = [
    {
        owner: "fitily",
        name: "data-analyst-BI-MHM",
        displayName: { fr: "Analyse de données BI — MHM", en: "MHM Data Analysis & BI" },
        description: {
            fr: "Analyse de données : extraction, transformation (ETL), visualisation et création de tableaux de bord.",
            en: "Data analysis covering extraction, transformation (ETL), visualization, and dashboard creation."
        }
    },
    {
        owner: "fitily",
        name: "patients_dashbord_ml_prediction",
        displayName: { fr: "Tableau de bord de prédiction médicale", en: "Patient Prediction Dashboard" },
        description: {
            fr: "Tableau de bord de prédiction pour les patients basé sur le machine learning.",
            en: "A machine-learning dashboard for patient predictions."
        }
    },
    {
        owner: "Ygnastixx",
        name: "site-cerise-backend",
        displayName: { fr: "Site Cerise — Backend", en: "Cerise Website — Backend" },
        description: {
            fr: "Développement de la partie backend d’un site web pour un club de robotique.",
            en: "Backend development for a website created for a robotics club."
        }
    },
    {
        owner: "TiahMHeranto",
        name: "ambitious-crew-project",
        displayName: { fr: "Novapedia", en: "Novapedia" },
        description: {
            fr: "Conception de Novapedia, une encyclopédie collaborative innovante inspirée de Wikipédia.",
            en: "An innovative collaborative encyclopedia inspired by Wikipedia."
        }
    },
    {
        owner: "fitily",
        name: "portfolio",
        displayName: { fr: "Portfolio personnel", en: "Personal Portfolio" },
        description: {
            fr: "Portfolio personnel présentant mon parcours, mes compétences et mes projets.",
            en: "A personal portfolio showcasing my experience, skills, and projects."
        }
    },
    {
        owner: "fitily",
        name: "algo-learn-tocode",
        displayName: { fr: "Apprentissage de l’algorithmique", en: "Learning Algorithms" },
        description: {
            fr: "Exercices d’algorithmique réalisés à l’American Corner pour apprendre les bases de la programmation.",
            en: "Algorithm exercises completed at the American Corner to learn programming fundamentals."
        }
    }
].map((project) => ({
    ...project,
    full_name: `${project.owner}/${project.name}`,
    html_url: `https://github.com/${project.owner}/${project.name}`
}));

async function fetchRepositoryMetadata(project, signal) {
    try {
        const response = await fetch(`https://api.github.com/repos/${project.full_name}`, { signal });
        if (!response.ok) return null;

        const { language, stargazers_count, pushed_at } = await response.json();
        return { language, stargazers_count, pushed_at };
    } catch (error) {
        if (error.name !== "AbortError") {
            console.warn(`Unable to load GitHub metadata for ${project.full_name}.`, error);
        }
        return null;
    }
}

export function useProjects(language) {
    const searchQuery = ref("");
    const projects = shallowRef(curatedProjects);
    const localizedProjects = computed(() => projects.value.map((project) => ({
        ...project,
        displayName: project.displayName[language.value],
        description: project.description[language.value]
    })));
    const visibleProjects = computed(() => {
        const query = searchQuery.value.trim().toLowerCase();
        return localizedProjects.value.filter((project) => {
            const searchableText = `${project.displayName} ${project.name} ${project.description} ${project.language || ""}`.toLowerCase();
            return searchableText.includes(query);
        });
    });
    const projectStatus = computed(() => {
        const count = visibleProjects.value.length;
        return translations[language.value].projects.status(count);
    });

    const controller = new AbortController();

    onMounted(async () => {
        const metadata = await Promise.all(
            curatedProjects.map((project) => fetchRepositoryMetadata(project, controller.signal))
        );

        if (controller.signal.aborted) return;

        projects.value = curatedProjects.map((project, index) => ({
            ...project,
            ...metadata[index]
        }));
    });

    onUnmounted(() => controller.abort());

    return { searchQuery, visibleProjects, projectStatus };
}
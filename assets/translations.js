export const translations = {
    fr: {
        meta: {
            title: "Miandry Finiavana Anjaramandresy | IA & science des données",
            description: "Portfolio de Miandry Finiavana Anjaramandresy, étudiant en intelligence artificielle et science des données."
        },
        wordmarkLabel: "Accueil, portfolio de Miandry Finiavana Anjaramandresy",
        navigationLabel: "Navigation principale",
        languageLabel: "Choisir la langue",
        navigation: { projects: "Projets", experience: "Parcours", contact: "Me contacter" },
        hero: {
            eyebrow: "Étudiant en IA et science des données",
            titleStart: "IA et données",
            titleLead: "au service de",
            titleAccent: "l’impact.",
            descriptionStart: "Je suis ",
            descriptionEnd: ", étudiant en intelligence artificielle et science des données. Je m’intéresse à la manière dont l’IA et les données peuvent être transformées en solutions concrètes au service de l’impact social.",
            projectsLink: "Découvrir mes projets",
            meta: "Science des données · IA · Impact",
            photoAlt: "Portrait de Miandry Finiavana Anjaramandresy",
            photoCaption: "— engagé pour l’impact",
            scrollLabel: "Faire défiler vers mon parcours"
        },
        experience: {
            eyebrow: "Là où j’apprends et j’agis",
            title: "Mon parcours",
            items: [
                {
                    date: "DEPUIS SEPT. 2026",
                    title: "Stagiaire en analyse de données et Business Intelligence",
                    organization: "ONG Mobile Hilfe Madagaskar",
                    organizationSuffix: "MHM",
                    detail: "Analyse de données et contribution au pilotage décisionnel au sein d’une organisation engagée à Madagascar.",
                    tag: "DONNÉES · BI"
                },
                {
                    date: "EN COURS",
                    title: "Master 1 — Intelligence artificielle",
                    organization: "École Nationale d’Informatique",
                    organizationSuffix: "Fianarantsoa",
                    detail: "Mention intelligence artificielle, parcours gouvernance et ingénierie des données.",
                    tag: "FORMATION"
                },
                {
                    date: "DEPUIS MAI 2024",
                    title: "Fondateur et chef de projet",
                    organization: "FromScratch",
                    detail: "Initiative sociale menée de la conception à la mise en place de formations en alphabétisation numérique pour les adolescents en milieu rural.",
                    tag: "ENTREPRISE SOCIALE",
                    href: "https://medium.com/@miandryfiniavana/bridging-the-digital-divide-empowering-rural-youth-through-digital-literacy-d820558c8327?sharedUserId=miandryfiniavana",
                    ariaLabel: "En savoir plus sur FromScratch dans cet article Medium"
                },
                {
                    date: "DEPUIS 2018",
                    title: "Chef d’unité scout",
                    organization: "Tily Eto Madagasikara",
                    organizationSuffix: "TEM · World Scouting",
                    detail: "Accompagnement de plus de 80 garçons âgés de 12 à 16 ans. Représentation de la FSM au rassemblement international de scouts à Sharjah, aux Émirats arabes unis, en février 2020. Volontaire de World Scouting et membre de l’équipe de modération du chat du JOTA-JOTI du 16 au 18 octobre 2026.",
                    tag: "BÉNÉVOLAT",
                    href: "https://www.linkedin.com/posts/who-is-finiavana-meet-miandry-finiavana-ugcPost-7229198545793224705-SiFt/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYQnOABpXQjwrdTi9rMY6NTTURFuiu-OCk",
                    ariaLabel: "En savoir plus sur mon engagement scout sur LinkedIn"
                }
            ]
        },
        projects: {
            eyebrow: "Expérimenter, construire, apprendre",
            title: "Projets",
            profileLink: "Mon profil GitHub",
            searchPlaceholder: "Rechercher un projet…",
            searchLabel: "Rechercher parmi mes projets",
            filterLabel: "FILTRER",
            status(count) {
                return count
                    ? `${count} projet${count > 1 ? "s" : ""} affiché${count > 1 ? "s" : ""}`
                    : "Aucun projet ne correspond à cette recherche.";
            },
            
        },
        contact: {
            eyebrow: "Contact · Projets & opportunités",
            titleStart: "Construisons",
            titleAccent: "la suite.",
            phone: "+261 38 13 897 90"
        },
        footer: {
            specialty: "Fondateur de FromScratch",
            alumni: "Ancien participant du programme YALI",
            linksLabel: "Liens professionnels"
        }
    },
    en: {
        meta: {
            title: "Miandry Finiavana Anjaramandresy | AI & Data",
            description: "Portfolio of Miandry Finiavana Anjaramandresy, an artificial intelligence and data science student."
        },
        wordmarkLabel: "Home, Miandry Finiavana Anjaramandresy's portfolio",
        navigationLabel: "Main navigation",
        languageLabel: "Choose language",
        navigation: { projects: "Projects", experience: "Experience", contact: "Get in touch" },
        hero: {
            eyebrow: "AI and data science student",
            titleStart: "AI and data",
            titleLead: "for",
            titleAccent: "impact.",
            descriptionStart: "I’m ",
            descriptionEnd: ", an artificial intelligence and data science student. I'm interested in how AI and data can be transformed into practical solutions that create social impact.",
            projectsLink: "My projects",
            meta: "Data Science · AI · Impact",
            photoAlt: "Portrait of Miandry Finiavana Anjaramandresy",
            photoCaption: "— Impact-driven",
            scrollLabel: "Scroll to my experience"
        },
        experience: {
            eyebrow: "Where I learn and contribute",
            title: "Experience",
            items: [
                {
                    date: "SINCE SEP. 2026",
                    title: "Data Analysis and Business Intelligence Intern",
                    organization: "Mobile Hilfe Madagascar NGO",
                    organizationSuffix: "MHM",
                    detail: "Leveraging data analysis to strengthen strategic decision-making and advance the mission of an organization driving positive change in Madagascar.",
                    tag: "DATA · BI"
                },
                {
                    date: "CURRENT",
                    title: "Master’s Year 1 — Artificial Intelligence",
                    organization: "National School of Informatics",
                    organizationSuffix: "Fianarantsoa",
                    detail: "Master’s program in Artificial Intelligence, specializing in Data Governance and Engineering.",
                    tag: "EDUCATION"
                },
                {
                    date: "SINCE MAY 2024",
                    title: "Founder and Project Lead",
                    organization: "FromScratch",
                    detail: "A social initiative developed from concept to delivery, providing digital literacy training for teenagers in rural communities.",
                    tag: "SOCIAL ENTERPRISE",
                    href: "https://medium.com/@miandryfiniavana/bridging-the-digital-divide-empowering-rural-youth-through-digital-literacy-d820558c8327?sharedUserId=miandryfiniavana",
                    ariaLabel: "Learn more about FromScratch in this Medium article"
                },
                {
                    date: "SINCE 2018",
                    title: "Scout Unit Leader",
                    organization: "Tily Eto Madagasikara",
                    organizationSuffix: "TEM · World Scouting",
                    detail: "Supported more than 80 boys aged 12 to 16. Represented the Malagasy Scout Federation (FSM) at the international scout gathering in Sharjah, UAE, in February 2020. World Scouting volunteer and chat moderator for JOTA-JOTI, October 16–18, 2026.",
                    tag: "VOLUNTEERING",
                    href: "https://www.linkedin.com/posts/who-is-finiavana-meet-miandry-finiavana-ugcPost-7229198545793224705-SiFt/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYQnOABpXQjwrdTi9rMY6NTTURFuiu-OCk",
                    ariaLabel: "Learn more about my scouting work on LinkedIn"
                }
            ]
        },
        projects: {
            eyebrow: "Experiment, build, learn",
            title: "Projects",
            profileLink: "My GitHub profile",
            searchPlaceholder: "Search projects…",
            searchLabel: "Search my projects",
            filterLabel: "FILTER",
            status(count) {
                return count
                    ? `${count} project${count === 1 ? "" : "s"} shown`
                    : "No projects match your search.";
            },
            
        },
        contact: {
            eyebrow: "Contact · Projects & opportunities",
            titleStart: "Let’s build",
            titleAccent: "what’s next.",
            phone: "+261 38 13 897 90"
        },
        footer: {
            specialty: "FromScratch founder",
            alumni: "YALI program alumnus",
            linksLabel: "Professional links"
        }
    }
};
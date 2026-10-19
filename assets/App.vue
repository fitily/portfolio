<script setup>
import { computed, ref, watch } from "vue";
import ProjectCard from "./ProjectCard.vue";
import { translations } from "./translations";
import { useProjects } from "./useProjects";

const currentYear = new Date().getFullYear();
const language = ref("en");
const content = computed(() => translations[language.value]);
const { searchQuery, visibleProjects, projectStatus } = useProjects(language);

watch(language, (locale) => {
    document.documentElement.lang = locale;
    document.title = translations[locale].meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", translations[locale].meta.description);
}, { immediate: true });
</script>

<template>
    <div class="min-h-screen">
        <header class="site-header">
            <a class="wordmark" href="#accueil" :aria-label="content.wordmarkLabel">F<span>.</span></a>
            <nav class="main-nav" :aria-label="content.navigationLabel">
                <a href="#projets">{{ content.navigation.projects }}</a>
                <a href="#parcours">{{ content.navigation.experience }}</a>
                <a class="nav-contact" href="#contact">{{ content.navigation.contact }} <span aria-hidden="true">↗</span></a>
                <div class="language-switcher" role="group" :aria-label="content.languageLabel">
                    <button type="button" :aria-pressed="language === 'en'" @click="language = 'en'">EN</button>
                    <span aria-hidden="true">|</span>
                    <button type="button" :aria-pressed="language === 'fr'" @click="language = 'fr'">FR</button>
                </div>
            </nav>
        </header>

        <main>
            <section class="hero page-width" id="accueil" aria-labelledby="hero-title">
                <div class="hero-copy">
                    <p class="eyebrow"><span class="status-dot"></span> {{ content.hero.eyebrow }}</p>
                    <h1 id="hero-title">{{ content.hero.titleStart }}<br>{{ content.hero.titleLead }} <span>{{ content.hero.titleAccent }}</span></h1>
                    <p class="hero-description">{{ content.hero.descriptionStart }}<strong>Miandry Finiavana Anjaramandresy</strong>{{ content.hero.descriptionEnd }}</p>
                    <div class="hero-actions">
                        <a class="button button-dark" href="#projets">{{ content.hero.projectsLink }} <span aria-hidden="true">↓</span></a>
                        <a class="text-link" href="https://www.linkedin.com/in/miandry-finiavana-anjaramandresy-568a59159/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
                    </div>
                    <div class="hero-meta">
                        <span>{{ content.hero.meta }}</span>
                    </div>
                </div>
                <div class="hero-visual">
                    <div class="photo-frame">
                        <img src="./photos/myActualPic.jpg" :alt="content.hero.photoAlt">
                        <span class="photo-caption">Miandry Finiavana <span>{{ content.hero.photoCaption }}</span></span>
                    </div>
                </div>
                <a class="scroll-cue" href="#parcours" :aria-label="content.hero.scrollLabel">↓</a>
            </section>

            <section class="section page-width" id="parcours" aria-labelledby="parcours-title">
                <div class="section-heading">
                    <p class="eyebrow">{{ content.experience.eyebrow }}</p>
                    <h2 id="parcours-title">{{ content.experience.title }}<span class="heading-dot">.</span></h2>
                </div>
                <div class="experience-list">
                    <component
                        :is="experience.href ? 'a' : 'article'"
                        v-for="experience in content.experience.items"
                        :key="experience.title"
                        class="experience-item"
                        :class="{ 'experience-link': experience.href }"
                        :href="experience.href"
                        :target="experience.href ? '_blank' : null"
                        :rel="experience.href ? 'noopener noreferrer' : null"
                        :aria-label="experience.ariaLabel || null"
                    >
                        <div class="experience-date">{{ experience.date }}</div>
                        <div class="experience-main">
                            <div class="experience-title-row">
                                <h3>{{ experience.title }}</h3>
                                <span class="experience-mark" aria-hidden="true">↗</span>
                            </div>
                            <p class="experience-org">{{ experience.organization }} <span v-if="experience.organizationSuffix">· {{ experience.organizationSuffix }}</span></p>
                            <p class="experience-detail">{{ experience.detail }}</p>
                        </div>
                        <span class="experience-tag">{{ experience.tag }}</span>
                    </component>
                </div>
            </section>

            <section class="projects-section" id="projets" aria-labelledby="projects-title">
                <div class="page-width">
                    <div class="section-heading projects-heading">
                        <div>
                            <p class="eyebrow">{{ content.projects.eyebrow }}</p>
                            <h2 id="projects-title">{{ content.projects.title }}<span class="heading-dot">.</span></h2>
                        </div>
                        <a class="text-link" href="https://github.com/fitily" target="_blank" rel="noopener noreferrer">{{ content.projects.profileLink }} <span aria-hidden="true">↗</span></a>
                    </div>
                    <label class="project-search">
                        <span aria-hidden="true">⌕</span>
                        <input v-model="searchQuery" type="search" :placeholder="content.projects.searchPlaceholder" :aria-label="content.projects.searchLabel">
                        <span class="search-hint">{{ content.projects.filterLabel }}</span>
                    </label>
                    <p class="project-status" aria-live="polite">{{ projectStatus }}</p>
                    <div class="project-grid">
                        <ProjectCard v-for="project in visibleProjects" :key="project.full_name" :project="project" :language="language" />
                    </div>
                </div>
            </section>

            <section class="contact-section page-width" id="contact" aria-labelledby="contact-title">
                <div>
                    <p class="eyebrow">{{ content.contact.eyebrow }}</p>
                    <h2 id="contact-title">{{ content.contact.titleStart }}<br><span>{{ content.contact.titleAccent }}</span></h2>
                </div>
                <div class="contact-details">
                    <a class="contact-email" href="mailto:miandryfiniavana@gmail.com">miandryfiniavana@gmail.com <span aria-hidden="true">↗</span></a>
                    <a href="tel:+261381389790">{{ content.contact.phone }}</a>
                </div>
            </section>
        </main>

        <footer class="site-footer page-width">
            <div class="footer-identity">
                <a class="wordmark" href="#accueil" aria-label="Retour en haut">F<span>.</span></a>
                <div>
                    <p class="footer-name">Miandry Finiavana Anjaramandresy</p>
                    <p class="footer-specialty">{{ content.footer.specialty }} <span>·</span> {{ content.footer.alumni }}</p>
                </div>
            </div>
            <nav class="footer-links" :aria-label="content.footer.linksLabel">
                <a href="https://github.com/fitily" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
                <a href="https://www.linkedin.com/in/miandry-finiavana-anjaramandresy-568a59159/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
                <a href="mailto:miandryfiniavana@gmail.com">{{ content.navigation.contact }} <span aria-hidden="true">↗</span></a>
            </nav>
            <p class="copyright">© {{ currentYear }} Miandry Finiavana Anjaramandresy</p>
        </footer>
    </div>
</template>
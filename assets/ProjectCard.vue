<script setup>
import { computed } from "vue";

const props = defineProps({
    project: {
        type: Object,
        required: true
    },
    language: {
        type: String,
        required: true,
        validator: (value) => ["en", "fr"].includes(value)
    }
});

const updatedLabel = computed(() => {
    if (!props.project.pushed_at) return props.project.full_name;

    const date = new Date(props.project.pushed_at);
    const dateLabel = date.toLocaleDateString(props.language === "en" ? "en-US" : "fr-FR", { month: "short", year: "numeric" });
    return props.language === "en" ? `Updated · ${dateLabel}` : `Mis à jour · ${dateLabel}`;
});

const descriptionFallback = computed(() => props.language === "en" ? "Description coming soon." : "Description à venir.");
const exploreLabel = computed(() => props.language === "en" ? `Explore ${props.project.displayName} on GitHub` : `Explorer ${props.project.displayName} sur GitHub`);
</script>

<template>
    <article class="project-card">
        <div class="project-card-top">
            <span>{{ project.language || (language === "en" ? "GitHub repository" : "Dépôt GitHub") }}</span>
            <span v-if="project.stargazers_count != null">★ {{ project.stargazers_count }}</span>
        </div>
        <h3>{{ project.displayName }}</h3>
        <p>{{ project.description || descriptionFallback }}</p>
        <div class="project-card-bottom">
            <span>{{ updatedLabel }}</span>
            <a :href="project.html_url" target="_blank" rel="noopener noreferrer" :aria-label="exploreLabel">{{ language === "en" ? "Explore" : "Explorer" }} ↗</a>
        </div>
    </article>
</template>
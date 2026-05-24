export const PROJECT_TAGS = {
    FREELANCE: 1,
    INTERNSHIP: 2,
    PERSONAL: 3,
    COMPETITION: 4
}

export const PROJECT_TAGS_META = {
    [PROJECT_TAGS.FREELANCE]: {
        label: "Freelance Project",
        className: "bg-emerald-600 text-white",
    },

    [PROJECT_TAGS.INTERNSHIP]: {
        label: "Internship Project",
        className: "bg-blue-600 text-white",
    },

    [PROJECT_TAGS.PERSONAL]: {
        label: "Personal Project",
        className: "bg-violet-600 text-white",
    },

    [PROJECT_TAGS.COMPETITION]: {
        label: "Competition Project",
        className: "bg-orange-500 text-white",
    },
}
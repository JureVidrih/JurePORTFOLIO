const button_scroll_to_top = document.querySelector("div.scroll-to-top-button");
const h1 = document.querySelector("h1");
const top_navbar = document.querySelector("body>header>nav");

const h1_waypoint = new Waypoint({
    element: h1,
    handler: function(direction) {
        if(direction == "down" && !button_scroll_to_top.classList.contains("scroll_to_top_button_visible")) {
            button_scroll_to_top.classList.toggle("scroll_to_top_button_visible");
        }
    }
});

const top_navbar_waypoint = new Waypoint({
    element: top_navbar,
    handler: function(direction) {
        if(direction == "up" && button_scroll_to_top.classList.contains("scroll_to_top_button_visible")) {
            button_scroll_to_top.classList.toggle("scroll_to_top_button_visible");
        }
    }
});

const section_skills = document.querySelector("section#skills");
const section_skills_list = document.querySelector("section#skills-list");

const section_skills_list_waypoint = new Waypoint({
    element: section_skills_list,
    handler: function(direction) {
        if(direction == "down" && !section_skills_list.classList.contains("visible")) {
            section_skills_list.classList.toggle("visible");
        }
    },
    offset: "bottom-in-view"
});
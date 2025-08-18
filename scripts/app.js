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

const button_busyn = document.querySelector("#button-busyn");
const project_busyn = document.querySelector("#project-busyn");
const project_busyn_height = project_busyn.scrollHeight;

project_busyn.style.transition = "max-height 1.5s ease-out";

button_busyn.addEventListener('click', () => {
    button_busyn.classList.toggle("button-project-more-active");
    project_busyn.style["max-height"] = (project_busyn.style["max-height"] == project_busyn_height+"px" ? null : project_busyn_height+"px");
});

const button_repl = document.querySelector("#button-repl");
const project_repl = document.querySelector("#project-repl");
const project_repl_height = project_repl.scrollHeight;

project_repl.style.transition = "max-height "+(1.5*(project_repl_height/project_busyn_height))+"s ease-out";

button_repl.addEventListener('click', () => {
    button_repl.classList.toggle("button-project-more-active");
    project_repl.style["max-height"] = (project_repl.style["max-height"] == project_repl_height+"px" ? null : project_repl_height+"px");
});

const button_eval = document.querySelector("#button-eval");
const project_eval = document.querySelector("#project-eval");
const project_eval_height = project_eval.scrollHeight;

project_eval.style.transition = "max-height "+(1.5*(project_eval_height/project_busyn_height))+"s ease-out";

button_eval.addEventListener('click', () => {
    button_eval.classList.toggle("button-project-more-active");
    project_eval.style["max-height"] = (project_eval.style["max-height"] == project_eval_height+"px" ? null : project_eval_height+"px");
});

const button_logger = document.querySelector("#button-logger");
const project_logger = document.querySelector("#project-logger");
const project_logger_height = project_logger.scrollHeight;

project_logger.style.transition = "max-height "+(1.5*(project_logger_height/project_busyn_height))+"s ease-out";

button_logger.addEventListener('click', () => {
    button_logger.classList.toggle("button-project-more-active");
    project_logger.style["max-height"] = (project_logger.style["max-height"] == project_logger_height+"px" ? null : project_logger_height+"px");
});
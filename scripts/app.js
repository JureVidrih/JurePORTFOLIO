window.addEventListener('load', () => {
    // Back to top button

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

    // Skills section

    const section_skills = document.querySelector("section#skills");
    const section_skills_list = document.querySelector("section#skills-list");

    const section_skills_list_waypoint = new Waypoint({
        element: section_skills_list,
        handler: function(direction) {
            if(direction == "down" && !section_skills_list.classList.contains("skills-list-visible")) {
                section_skills_list.classList.toggle("skills-list-visible");
            }
        },
        offset: "bottom-in-view"
    });



    // Skills popup

    const overlay = document.querySelector("div.skill-popup-overlay");
    const skill_popup = document.querySelector("article.skill-popup");

    const skills_title = document.querySelector("article.skill-popup>h4");
    const skills_have = document.querySelector("section.skills>p");
    const skills_lack = document.querySelector("section.skills-to-acquire>p");

    function showSkillPopUp(title, skills, lacked_skills) {
        if(!overlay.classList.contains("skill-popup-overlay-visible")) {
            skills_title.innerText = title;
            skills_have.innerText = skills;
            skills_lack.innerText = lacked_skills;
            document.body.classList.toggle("no-scroll");
            overlay.classList.toggle("skill-popup-overlay-visible");
        }
    }

    function hideSkillPopUp() {
        if(overlay.classList.contains("skill-popup-overlay-visible")) {
            document.body.classList.toggle("no-scroll");
            overlay.classList.toggle("skill-popup-overlay-visible");
        }
    }

    overlay.addEventListener('click', (evt) => {
        evt.stopPropagation();
        hideSkillPopUp();
    });

    skill_popup.addEventListener('click', (evt) => {
        evt.stopPropagation();
    });

    const button_html5 = document.querySelector("#skill-html5>div.skill-button");
    const button_css3 = document.querySelector("#skill-css3>div.skill-button");
    const button_javascript = document.querySelector("#skill-javascript>div.skill-button");
    const button_git = document.querySelector("#skill-git>div.skill-button");
    const button_react = document.querySelector("#skill-react>div.skill-button");
    const button_electron = document.querySelector("#skill-electron>div.skill-button");
    const button_nodejs = document.querySelector("#skill-nodejs>div.skill-button");
    const button_express = document.querySelector("#skill-express>div.skill-button");
    const button_mongodb = document.querySelector("#skill-mongodb>div.skill-button");
    const button_android = document.querySelector("#skill-android>div.skill-button");
    const button_rn = document.querySelector("#skill-rn>div.skill-button");
    const button_java = document.querySelector("#skill-java>div.skill-button");

    button_html5.addEventListener('click', () => {
        showSkillPopUp("HTML5", "I'm confident that I can build anything that's possible to build with HTML5 -- with a little refresher and new knowledge, where needed.", "Refresh and gain better knowledge of semantic elements, Web APIs and various HTML elements.");
    });
    
    button_css3.addEventListener('click', () => {
        showSkillPopUp("CSS3", "I am somewhat comfortable with CSS3. I really like using Flexbox.", "I want to become more comfortable with media queries. Also, I only used CSS grid and animations once, I believe. Should I learn and prioritize something that I almost never used?");
    });

    button_javascript.addEventListener('click', () => {
        showSkillPopUp("JavaScript", "I am comfortable with JS, but I guess there is always room for improvement.", "I would like to take a deeper dive into JavaScript as a language and learn about more of its features.");
    });

    button_git.addEventListener('click', () => {
        showSkillPopUp("Git", "I can pull, push and manage a local copy of a repo.", "I should learn about more advanced Git topics and commands, and I need to refresh certain concepts.");
    });

    button_react.addEventListener('click', () => {
        showSkillPopUp("React", "I am comfortable with React, but, there is always more out there to learn.", "Using functional components and more topics and concepts of React.");
    });

    button_electron.addEventListener('click', () => {
        showSkillPopUp("Electron", "I can create a desktop application with electron-react-boilerplate and create a desktop app on that platform.", "Quite a bit, I presume, as I have as of right now only learned just enough for what I needed.");
    });

    button_nodejs.addEventListener('click', () => {
        showSkillPopUp("Node.js", "I have limited experience with Node.js. I used it when I was creating full-stack web apps with Express, MongoDB and EJS on the back-end.", "Quite a bit, if I wanted to master it.");
    });

    button_express.addEventListener('click', () => {
        showSkillPopUp("Express", "I started to use express in the spring of 2018, but have had almost no experience with it since then.", "Express is not a hard framework to learn -- but I should still refresh a lot of concepts, if I were to use it again.");
    });

    button_mongodb.addEventListener('click', () => {
        showSkillPopUp("MongoDB", "I learned and used MongoDB in the spring of 2018 and have had no experience with it since then.", "It is not a hard technology to learn, but I should refresh my knowledge about the database, if I were to work with it again.");
    });

    button_android.addEventListener('click', () => {
        showSkillPopUp("Android", "I learned to use Android propertly in the summer of 2017 and had been building apps for it before that -- but have had no experience since then, since I've moved to React Native for mobile development.", "My knowledge is outdated, even though I am comfortable with Java. I would need to learn new tools and concepts for modern app development.");
    });

    button_rn.addEventListener('click', () => {
        showSkillPopUp("React Native", "It is similar to React and I bet I'm still somewhat comfortable with it -- even though I haven't really used it since the year of 2021.", "I need to analyze on how this technology has changed since 2021 and refresh certain knowledge.");
    });

    button_java.addEventListener('click', () => {
        showSkillPopUp("Java", "I recently completed two courses on Java development on Coursera and I think I can say that I'm comfortable with it.", "I should refresh my knowledge and learn new concepts and topics.");
    });

    // Projects section

    const button_busyn = document.querySelector("#button-busyn");
    const project_busyn = document.querySelector("#project-busyn");
    const project_busyn_height = project_busyn.scrollHeight;

    project_busyn.style.transition = "max-height 1.5s ease-out, background-color .08s, opacity .2s ease-out, transform .2s ease-out";

    button_busyn.addEventListener('click', () => {
        button_busyn.classList.toggle("button-project-more-active");
        project_busyn.style["max-height"] = (project_busyn.style["max-height"] == project_busyn_height+"px" ? null : project_busyn_height+"px");
        if(project_busyn.style["background-color"] == "rgb(35, 35, 35)") {
            setTimeout(() => { project_busyn.style["background-color"] = null; }, 1500);
        } else {
            project_busyn.style["background-color"] = "rgb(35, 35, 35)";
        }
    });

    const button_repl = document.querySelector("#button-repl");
    const project_repl = document.querySelector("#project-repl");
    const project_repl_height = project_repl.scrollHeight;

    let project_repl_maxheight_transition = (1.5*(project_repl_height/project_busyn_height));
    project_repl.style.transition = "max-height "+project_repl_maxheight_transition+"s ease-out, background-color .08s, opacity .2s ease-out, transform .2s ease-out";

    button_repl.addEventListener('click', () => {
        button_repl.classList.toggle("button-project-more-active");
        project_repl.style["max-height"] = (project_repl.style["max-height"] == project_repl_height+"px" ? null : project_repl_height+"px");
        if(project_repl.style["background-color"] == "rgb(35, 35, 35)") {
            setTimeout(() => { project_repl.style["background-color"] = null; }, project_repl_maxheight_transition*1000);
        } else {
            project_repl.style["background-color"] = "rgb(35, 35, 35)";
        }
    });

    const button_eval = document.querySelector("#button-eval");
    const project_eval = document.querySelector("#project-eval");
    const project_eval_height = project_eval.scrollHeight;

    let project_eval_maxheight_transition = (1.5*(project_eval_height/project_busyn_height));
    project_eval.style.transition = "max-height "+project_eval_maxheight_transition+"s ease-out, background-color .08s, opacity .2s ease-out, transform .2s ease-out";

    button_eval.addEventListener('click', () => {
        button_eval.classList.toggle("button-project-more-active");
        project_eval.style["max-height"] = (project_eval.style["max-height"] == project_eval_height+"px" ? null : project_eval_height+"px");
        if(project_eval.style["background-color"] == "rgb(35, 35, 35)") {
            setTimeout(() => { project_eval.style["background-color"] = null; }, project_eval_maxheight_transition*1000);
        } else {
            project_eval.style["background-color"] = "rgb(35, 35, 35)";
        }
    });

    const button_logger = document.querySelector("#button-logger");
    const project_logger = document.querySelector("#project-logger");
    const project_logger_height = project_logger.scrollHeight;

    let project_logger_maxheight_transition = (1.5*(project_logger_height/project_busyn_height));
    project_logger.style.transition = "max-height "+project_logger_maxheight_transition+"s ease-out, background-color .08s, opacity .2s ease-out, transform .2s ease-out";

    button_logger.addEventListener('click', () => {
        button_logger.classList.toggle("button-project-more-active");
        project_logger.style["max-height"] = (project_logger.style["max-height"] == project_logger_height+"px" ? null : project_logger_height+"px");
        if(project_logger.style["background-color"] == "rgb(35, 35, 35)") {
            setTimeout(() => { project_logger.style["background-color"] = null; }, project_logger_maxheight_transition*1000);
        } else {
            project_logger.style["background-color"] = "rgb(35, 35, 35)";
        }
    });

    // Projects waypoint toggle

    const body_footer = document.querySelector("body>footer");
    const article_busyn = document.querySelector("article#project-busyn");
    const article_repl = document.querySelector("article#project-repl");
    const article_eval = document.querySelector("article#project-eval");
    const article_logger = document.querySelector("article#project-logger");

    const section_projects_waypoint = new Waypoint({
        element: body_footer,
        handler: function(direction) {
            if(direction == "down" && !article_busyn.classList.contains("project-visible")) {
                article_busyn.classList.toggle("project-visible");
                setTimeout(() => { article_repl.classList.toggle("project-visible"); }, 150);
                setTimeout(() => { article_eval.classList.toggle("project-visible"); }, 300);
                setTimeout(() => { article_logger.classList.toggle("project-visible"); }, 450);
            }
        },
        offset: "bottom-in-view"
    });
});
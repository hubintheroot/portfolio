import config from "./config.js";
import DefaultContent from "./DefaultContent.js";

const { LOGOS } = config;

class Projects {
    $projects = null;
    data = null;
    
    constructor($target) {
        new DefaultContent({
            $target,
            data: "projects"
        });

        this.$projects = document.querySelector('.projects-list-box');
        
        this.setState(config.MY_PROJECTS);
    }

    addInfo() {
        this.$projects.innerHTML = this.data.map((project) => `
        <li class="project-info">
            <a href="${project.LINK}">
                <figure>
                    <div class="img-container"><img src="${project.IMG_PATH}" width="128" height="128"></div>
                    <figcaption class="pj-info">
                        <h3>${project.TITLE}</h3>
                        <p>${project.INFO}</p>
                        <ul>` +
                        project.USE_SKILLS.map((skill) => `
                            <li>${LOGOS[skill]}</li>
                        `).join('') +
                        `</ul>
                    </figcaption>
                </figure>
            </a>
        </li>
        `).join('');
    }

    setState(nextData) {
        this.data = nextData;
        this.render();
    }

    render() {
        this.addInfo();
        console.log('projects:: successfully rendered');
    }
}

export default Projects;
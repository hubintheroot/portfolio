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
            <a href="${project.LINK}" class="git-logo" target="blank" title="깃허브로 이동하기" >
            <img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/>
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
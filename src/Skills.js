import config from './config.js';
import DefaultContent from './DefaultContent.js';

const { LOGOS } = config;

class Skills {
    $skills = null;
    data = null;

    constructor($target) {
        new DefaultContent({
            $target,
            data: "skills"
        });

        this.$skills = document.querySelector('.skills-list-box');
        
        this.setState(config.MY_SKILLS);
    }

    setState(nextData) {
        this.data = nextData;
        this.render();
    }
    
    render() {
        this.$skills.innerHTML = this.data.map((skill) => `
            <li>
                ${LOGOS[skill]}
            </li>
        `).join('');
        console.log('skills:: successfully rendered');
    }
}


export default Skills;
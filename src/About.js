import config from "./config.js";

class About {
    $about = null;
    data = null;

    constructor($target) {
        this.$about = $target;
        this.setState(config.ICONS);
    }

    setState(nextData) {
        this.data = nextData;
        this.render();
    }

    render() {
        this.$about.innerHTML = `
        <div id="introduction">
                    <p>안녕하세요</p>
                    <p>배움과 문제해결 과정을 즐기는</p>
                    <p>주니어 Frontend 개발자 편상건입니다</p>
                </div>
                <div id="profile" class="about-inner">
                    <h2>ABOUT</h2>
                    <ul>
                        <li>
                            ${this.data.NAME}
                            <span>편상건</span></li>
                        <li>
                            ${this.data.BIRTHDAY}
                            <span>1996.02.19</span></li>
                        <li>
                            ${this.data.ADDRESS}
                            <span>서울특별시 영등포구</span></li>
                        <li>
                            ${this.data.MAIL}
                            <span>hubintheroot@gmail.com</span></li>
                        <li>
                            ${this.data.UNIVERSITY}
                            <span>백석대학교 ( 정보보호학과, 정보통신학부 )</span>
                        </li>
                    </ul>
                </div>
        `
        console.log('about:: successfully rendered');
    }
}

export default About;
class Snow {
    $target = null;
    $canvas = null;
    ctx = null;

    temp = {
        canvasWidth: null,
        canvasHeight: null,
    };
    data = {
        snowCount: null,
        snowData: [],
        canvasWidth: null,
        canvasHeight: null,
    };
    
    constructor($target, snowCount=150) {
        this.$target = $target;
        // 대상 요소의 크기를 저장
        this.data.canvasWidth = this.$target.offsetWidth;
        this.data.canvasHeight = this.$target.offsetHeight;
        this.data.snowCount = snowCount;

        // 대상 요소의 크기 변동을 체크하기 위한 첫 캔버스 크기 보관
        this.temp.canvasWidth = this.data.canvasWidth;
        this.temp.canvasHeight = this.data.canvasHeight;

        // 캔버스 생성
        this.createCanvas();
        window.addEventListener("resize", () => this.resize());
        this.init();
    };

    init() {
        this.make();
        this.loop();
    };

    loop() {
        this.move();
        this.draw();
        window.requestAnimationFrame((time) => this.loop(time));
    };

    make() {
        const data = [];
        for(let i = 0; i < this.data.snowCount; i++) {
            const {x, y, size, speed, dir} = this.setRandom();
            data.push({
                x,
                y,
                size,
                speed,
                dir
            });
        }
        this.data.snowData = data;
    };

    move() {
        this.data.snowData = this.data.snowData.map((item) => {
            item.x += item.dir * item.speed;
            item.y += item.speed;

            const isMinOverX = -item.size > item.x;
            const isMaxOverX = item.x > this.data.canvasWidth;
            const isOverY = item.y > this.data.canvasHeight;

            // 캔버스를 벗어난 눈송이 처리
            // 눈송이가 벽에 부딪히면 방향전환
            if (isMinOverX || isMaxOverX) {
                item.dir *= -1;
            }
            // 눈송이 높이 초기화
            if (isOverY) {
                item.y = 0;
            }
            return item;
        });
    };

    draw() {
        this.ctx.clearRect(0, 0, this.data.canvasWidth, this.data.canvasHeight);

        this.data.snowData.forEach((item) => {
            this.ctx.beginPath();
            this.ctx.fillStyle = 'rgba(255, 255, 255, .6';
            this.ctx.arc(item.x, item.y, item.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.closePath();
        });
    };

    createCanvas() {
        // 캔버스를 생성하는 부분
        this.$target.innerHTML = `
        <canvas class="canvas" width="${this.data.canvasWidth}" height="${this.data.canvasHeight}"></canvas>
        `;
        this.$canvas = this.$target.querySelector('.canvas');
        // 배경 바꾸기
        this.$canvas.setAttribute('style', 'background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);')
        
        // 2차원 렌더링 컨텍스트 객체를 생성
        this.ctx = this.$canvas.getContext('2d');
    };

    setRandom() {
        const x = Math.random() * this.data.canvasWidth;
        const y = Math.random() * this.data.canvasHeight;

        const size = Math.random() * 2;
        const speed = Math.random() * 0.3 + 0.1;
        const dir = [-1, 1][Math.floor(Math.random() * 2)];

        return {x, y, size, speed, dir};
    }

    // 캔버스가 반응형으로 크기가 변경될 때 사이즈를 다시 정하는 함수
    resize() {
        const getWidth = this.$target.offsetWidth;
        const getHeight = this.$target.offsetHeight;
        // 캔버스를 감싸는 요소의 크기가 변경되지 않았을 때 자원소모를 방지
        if(this.temp.canvasWidth !== getWidth ||  this.temp.canvasHeight !== getHeight) {
            
            this.data.canvasWidth = getWidth;
            this.data.canvasHeight = getHeight;

            this.createCanvas();
            this.make();

            this.temp.canvasWidth = getWidth;
            this.temp.canvasHeight = getHeight;
        }
    }
}


export default Snow;
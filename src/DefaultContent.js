class DefaultContent {
    data = {};

    constructor({ $target, data}) {
        this.setState({
            $target: $target,
            name: {
                title: data.toUpperCase(),
                className: data
            }
        });
    }

    setState(nextData) {
        this.data = nextData;
        this.render();
    }

    render() {
        this.data.$target.innerHTML = `
        <div class="section-header">
            <h2>${this.data.name.title}</h2>
        </div>
        <div class="${this.data.name.className}-inner">
            <ul class="${this.data.name.className}-list-box"></ul>
        </div>
        `
    }
}

export default DefaultContent;
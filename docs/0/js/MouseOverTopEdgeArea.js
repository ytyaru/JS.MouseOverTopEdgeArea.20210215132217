class MouseOverTopEdgeArea {
    static #height
    static #style
    static #element 
    static parse(id='style-auto-color', query='#top-edge', template=null, height=100) {
        this.#height = height;
        console.log('parse()');
//        const style = new MouseOverTopEdgeAreaStyle(id, query, template);
//        style.replace();
        this.#element = document.querySelector(query);
        document.addEventListener('mousemove', (event)=>{
            console.log(`${event.clientY}, ${this.#height}, ${event.target}`);
            if (event.clientY < this.#height) { MouseOverTopEdgeArea.#show(this.#element); }
            else { MouseOverTopEdgeArea.#hide(this.#element); }
        });
        this.#hide(this.#element);
    }
    static #show(element) {
        console.log('#show');
        element.style.display = 'inline';
    }
    static #hide(element) {
        console.log('#hide');
        element.style.position = 'fixed';
        element.style.top = '0';
        element.style.right= '0';
        element.style.display = 'none';
    }
}

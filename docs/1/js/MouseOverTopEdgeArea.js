class MouseOverTopEdgeArea {
    static #height
    static #style
    static #element 
    static parse(id='style-auto-color', query='#top-edge', template=null, height=100) {
        this.#height = height;
        this.#element = document.querySelector(query);
        document.addEventListener('mousemove', (event)=>{
            if (event.clientY < this.#height) { MouseOverTopEdgeArea.#show(this.#element); }
            else { MouseOverTopEdgeArea.#hide(this.#element); }
        });
        this.#hide(this.#element);
    }
    static #show(element) {
        element.style.display = 'inline';
    }
    static #hide(element) {
        element.style.position = 'fixed';
        element.style.top = '0';
        element.style.right= '0';
        element.style.display = 'none';
    }
}

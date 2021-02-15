class MouseOverTopEdgeAreaStyle {
    #id = 'style-top-edge'
    #query = '#top-edge'
    #template;
    constructor(id='style-auto-color', query='#top-edge', template=null) {
        this.#id = id;
        this.#query = query;
        this.#template = template || this.#getDefaultTemplate();
    }
    replace() {
        const style = document.querySelector(`#${this.#id}`) || this.#createStyle();
        console.log('style:', style);
        style.textContent = this.#replaceTemplate();
        return this.#id;
    }
    #createStyle(colors) {
        const style = document.createElement('style');
        style.id = this.#id;
        document.head.appendChild(style);
        return style;
    }
    #getDefaultTemplate() {
        return `
            ${this.#query} {
                position: fixed;
                display: none;
            }
            ${this.#query}:hover .dropdown{
                display: inline;
            }
        `;
    }
    #replaceTemplate() {
        const regexps = [];
        regexps.push({regexp: new RegExp('{{[\s]*query[\s]*}}', 'g'), replace: this.#query});
        let css = this.#template;
        for (let regexp of regexps) {
            css = css.replace(regexp.regexp, regexp.replace);
        }
        return css;
    }
        /*
    replace(colors) {
        const style = document.querySelector(`#${this.#id}`) || this.#createStyle();
        console.log('style:', style);
        style.textContent = this.#replaceTemplate(colors);
        return this.#id;
    }
    #replaceTemplate(colors) {
        const css = this.#template || 
        return `
            {{query}} {
                position: fixed;
                right: 0;
                display: none;
            }
            {{query}}:hover .dropdown{
                display: inline;
            }
        `;
        this.#regexps = [];
        this.#regexps.push({regexp: new RegExp('{{[\s]*query[\s]*}}', 'g'), replace: this.#query});
        for (let key of ['back', 'fore', 'selectedBack', 'selectedFore', 'shadow']) {
            this.#regexps.push({regexp: new RegExp(`{{[\s]*${key}[\s]*}}`, 'g'), replace: colors[`${key}`]});
        }
        console.log(this.#regexps);
        let css = this.#template;
        for (let regexp of this.#regexps) {
            css = css.replace(regexp.regexp, regexp.replace);
        }
        console.log(colors);
        console.log(css);
        return css;
    }
        */
}

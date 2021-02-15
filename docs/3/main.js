window.addEventListener('load', async(event) => {
    MouseOverTopEdgeArea.Template = await Loader.load('./css-template/top-edge.css');
    MouseOverTopEdgeArea.parse();
});

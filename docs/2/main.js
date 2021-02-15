window.addEventListener('load', async(event) => {
//    MouseOverTopEdgeArea.parse(undefined, undefined, template=await Loader.load('./css-template/top-edge.css'));
    MouseOverTopEdgeArea.Template = await Loader.load('./css-template/top-edge.css');
    MouseOverTopEdgeArea.parse();
});

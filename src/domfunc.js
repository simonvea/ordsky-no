import {select} from 'd3-selection';

export function appendCloud(cloud, element) {

    //removes previous cloud
    if(element.firstChild) {element.removeChild(element.firstChild)}

    select(element).append("svg")
        .attr("width", 500) //layout.size()[0]
        .attr("height", 500) //layout.size()[1]
        .append("g")
        .attr("transform", "translate(" + 500 / 2 + "," + 500 / 2 + ")")
        .selectAll("text")
        .data(cloud)
        .enter().append("text")
        .style("font-size", (d) => d.size + "px")
        .style("font-family", "Impact")
        .style("fill", (d) => d.fill)
        .attr("text-anchor", "middle")
        .attr("transform", (d) => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
        .text((d) => d.text);
}

export function appendDowloadButton(dataURL, element){
    const html = `<a href="${dataURL}" download="ordsky" class="btn btn-secondary" role="button" id="download-btn">Last ned som svg</a>`
    element.innerHTML = html
}

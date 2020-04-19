// https://observablehq.com/@d3/force-directed-graph@139
export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["data.json", new URL("../data/1804.json", import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  // main.variable(observer()).define(["md"], function (md) { });
  main.variable(observer("chart")).define("chart", ["data", "d3", "width", "height", "color", "drag", "invalidation"], function (data, d3, width, height, color, drag, invalidation) {
    const links = data.links.map(d => Object.create(d));
    const nodes = data.nodes.map(d => Object.create(d));

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide(30));

    const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])
      .attr("class", "box");


    // const bg = svg.append("rect")
    //   .attr("width", "100%")
    //   .attr("height", "100%")
    //   .attr("fill", "#000");

    const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", d => Math.sqrt(1));

    const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", d => d.size)
      .attr("fill", d => d.color)
      .on("touchstart", onTouch)
      // .on("touchmove",onTouch)
      .on("mouseleave", handleMouseLeave)
      .on("click", handleMouseClick)
      .call(drag(simulation))
      .on("mouseover", mouseHover)
      .on("mouseout", mouseOut);

    node.append("title")
      .text(d => d.name);


    svg.call(d3.zoom()
      .extent([[0, 0], [width, height]])
      .scaleExtent([0.25, 8])
      .on("zoom", zoomed));

    function zoomed() {
      node.attr("transform", d3.event.transform);
      link.attr("transform", d3.event.transform);
    }
    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
    });

    function handleMouseOver(d, i) {  // Add interactivity
      if (d.class == "link") {
        document.body.style.cursor = 'pointer';
      }
    }

    function handleMouseLeave(d, i) {  // Add interactivity
      document.body.style.cursor = 'auto';
    }

    function bodyClick(d, i) {  // Add interactivity
      console.log(d);
      document.body.style.cursor = 'auto';
    }

    function nodeMouseover(d) {
      console.log("hi");
      node.classed("active", function (p) { return d3.select(this).classed("active") || p.source === d || p.target === d; });
      svg.selectAll(".link.active").each(function (d) { linkMouseover(d) })
      d3.select(this).classed("active", true);
    }
    function linkMouseover(d) {
      node.classed("active", function (p) { return d3.select(this).classed("active") || p === d.source || p === d.target; });
    }

    function mouseHover(d) {
      if(d.class = "link"){
        document.body.style.cursor = 'pointer';
      }
      d3.select(this).style("stroke-width", 6);
      var nodeNeighbors = links.filter(function (link) {
        return link.source.index === d.index || link.target.index === d.index;
      })
        .map(function (link) {
          return link.source.index === d.index ? link.target.index : link.source.index;
        });
      // svg.selectAll('circle').style('stroke', 'red');
      svg.selectAll('circle').filter(function (node) {
        return nodeNeighbors.indexOf(node.index) > -1;
      })
        .style('stroke', 'red')
        .style('opacity', 1);
      d3.select(this).style("stroke", "red");
      //}
    }

    function mouseOut (d) {
        document.body.style.cursor = 'auto';
        svg.selectAll('circle').style('opacity', 0.6);
        svg.selectAll('circle').style('stroke', 'black');
        d3.select(this).style("stroke-width", 1);
    }

    function handleMouseClick(d, i) {
      if (d.class == "tag") {
        d3.select(this).attr("style", "fill: blue; stroke: black");
      } else {
        window.open(d.link)
      }
      node.attr("class");
    }

    function onTouch(d) {
      d3.event.preventDefault();
      d3.event.stopPropagation();
      let x = d3.touches(this);
      console.log(d.class);
      mouseOut(d);
      mouseHover(d);
      if(d.class == "link"){
        handleMouseClick(d);
      }
      if (d.class == "tag") {
        d3.select(this).attr("style", "fill: blue; stroke: black");
      }
    }

    invalidation.then(() => simulation.stop());

    return svg.node();
  }
  );
  main.variable(observer("data")).define("data", ["FileAttachment"], function (FileAttachment) {
    return (
      FileAttachment("data.json").json()
    )
  });
  main.variable(observer("height")).define("height", function () {
    return (
      // 600
      window.innerHeight
    )
  });
  main.variable(observer("color")).define("color", ["d3"], function (d3) {
    const scale = d3.scaleOrdinal(d3.schemeCategory10);
    return d => scale(d.group);
  }
  );
  main.variable(observer("drag")).define("drag", ["d3"], function (d3) {
    return (
      simulation => {

        function dragstarted(d) {
          if (!d3.event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        }

        function dragged(d) {
          d.fx = d3.event.x;
          d.fy = d3.event.y;
        }

        function dragended(d) {
          if (!d3.event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }

        return d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended);
      }
    )
  });
  main.variable(observer("d3")).define("d3", ["require"], function (require) {
    return (
      require("d3@5")
    )
  });
  return main;
}

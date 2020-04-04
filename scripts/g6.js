
      // const data = {
      //   nodes: [
      //     {id: 'node1',label: 'node1',},
      //     {id: 'node2',label: 'node2',},
      //   ],
      //   edges: [
      //     {source: 'node1', target: 'node2',},
      //     {source: 'node2', target: 'node1',curveOffset: 50,},
      //     {source: 'node2', target: 'node1',curveOffset: 100,},
      //   ],
      // };

      
      // const data = {
      //   nodes: [
      //     { id:  'n1', label: 'maths',},
      //     { id:  'n2', label: 'science',},
      //     { id:  'n3', label: 'biology',},
      //     { id:  'n4', label: 'epistomology',},
      //     { id:  'n5', label: 'feminism',},
      //     { id:  'n6', label: 'empiricism',},
      //     { id:  'n7', label: 'emergence',},
      //     { id:  'n8', label: 'morality',},
      //     { id:  'n9', label: 'philosophy',},
      //     { id: 'n10', label: 'algorithm',},
      //   ],
      //   edges: [
      //     { source: 'n1',  target: 'n2',  label: 'article', curveOffset:   0, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n1',  target: 'n2',  label: 'article', curveOffset:  20, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n2',  target: 'n4',  label: 'article', curveOffset:   0, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n2',  target: 'n5',  label: 'article', curveOffset:  20, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n2',  target: 'n4',  label: 'article', curveOffset:  40, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n2',  target: 'n6',  label: 'article', curveOffset:  60, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n3',  target: 'n4',  label: 'article', curveOffset:   0, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n3',  target: 'n9',  label: 'article', curveOffset:  20, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n4',  target: 'n5',  label: 'article', curveOffset:   0, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n4',  target: 'n6',  label: 'article', curveOffset:  20, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n4',  target: 'n7',  label: 'article', curveOffset:  40, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n4',  target: 'n10', label: 'article', curveOffset:  60, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n5',  target: 'n2',  label: 'article', curveOffset:   0, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n5',  target: 'n1',  label: 'article', curveOffset:  20, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n5',  target: 'n8',  label: 'article', curveOffset:  40, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n6',  target: 'n4',  label: 'article', curveOffset:   0, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n6',  target: 'n10', label: 'article', curveOffset:  20, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n6',  target: 'n1',  label: 'article', curveOffset:  40, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n6',  target: 'n3',  label: 'article', curveOffset:  60, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n7',  target: 'n2',  label: 'article', curveOffset:   0, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n7',  target: 'n6',  label: 'article', curveOffset:  20, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n7',  target: 'n8',  label: 'article', curveOffset:  40, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n7',  target: 'n9',  label: 'article', curveOffset:  60, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n7',  target: 'n10', label: 'article', curveOffset:  80, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n8',  target: 'n4',  label: 'article', curveOffset:   0, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n9',  target: 'n4',  label: 'article', curveOffset:   0, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n9',  target: 'n1',  label: 'article', curveOffset:  20, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n9',  target: 'n2',  label: 'article', curveOffset:  40, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n9',  target: 'n3',  label: 'article', curveOffset:  60, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n10', target: 'n4',  label: 'article', curveOffset:   0, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n10', target: 'n2',  label: 'article', curveOffset:  20, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n10', target: 'n6',  label: 'article', curveOffset:  40, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n10', target: 'n7',  label: 'article', curveOffset:  60, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n10', target: 'n8',  label: 'article', curveOffset:  80, link: "https://onlinelibrary.wiley.com/doi/", },
      //     { source: 'n10', target: 'n9',  label: 'article', curveOffset: 100, link: "https://onlinelibrary.wiley.com/doi/", },
      //   ],
      // };

      console.log(window.innerWidth);
      console.log(window.innerHeight);

      const graph = new G6.Graph({
        container: mountNode,
        width: window.innerWidth,
        height: window.innerHeight,
        // fitView: true,
        modes:{
          default: [
            {
              type: 'tooltip',
              formatText: function formatText(model) {
                return model.label;
              },
            },
            {
              type: 'edge-tooltip',
              formatText: function formatText(model, e) {
                const edge = e.item;
                return (
                  edge.getSource().getModel().label + " + " +
                  edge.getTarget().getModel().label
                );
              },
            },
          ],
        },
        defaultNode: {
          size:100,
          style: {
            fill: '#DEE9FF',
            stroke: '#5B8FF9',
          },
          labelCfg: {
            style: {
              fontSize: 24,
            },
            position:"bottom",
          },
        },
        defaultEdge: {
          type: 'arc', // assign the edges to be quadratic bezier curves
          size: 5,
          style: {
            stroke: '#e2e2e2',
          },
        },
        layout: {                // Object, layout configuration. random by default
          type: 'force',
            // type: 'radial',         // Force layout
            linkDistance: 600,
            preventOverlap: true,  // Prevent node overlappings
            // nodeSize: 30        // The size of nodes for collide detection. Since we have assigned sizes for each node to their data in last chapter, the nodeSize here is not required any more.
          },
          nodeStateStyles: {
            highlight: {
              opacity: 1,
            },
            dark: {
              opacity: 0.2,
            },
          },
          edgeStateStyles: {
            highlight: {
              stroke: '#999',
            },
          },
      });
      
      // graph.data(data);
      // graph.render();
      
      fetch('../data/data.json')
  .then(res => res.json())
  .then(data => {
    graph.data({
      nodes: data.nodes,
      edges: data.edges.map(function(edge, i) {
        edge.id = 'edge' + i;
        return Object.assign({}, edge);
      }),
    });
    graph.render();

    graph.on('node:dragstart', function(e) {
      graph.layout();
      refreshDragedNodePosition(e);
    });
    graph.on('node:drag', function(e) {
      refreshDragedNodePosition(e);
    });
    graph.on('node:dragend', function(e) {
      e.item.get('model').fx = null;
      e.item.get('model').fy = null;
    });
  });

function refreshDragedNodePosition(e) {
  const model = e.item.get('model');
  model.fx = e.x;
  model.fy = e.y;
}

graph.on('edge:click', ev => {
  // window.open("https://www.google.com");
  window.open(ev.item._cfg.model.link)
});

graph.on('edge:mouseenter', evt => {
  document.body.style.cursor = "pointer";
  const item = evt.item;
  graph.setAutoPaint(false);
  graph.setItemState(item, 'hightlight', true);
});

graph.on('node:mouseenter', function(e) {
  const item = e.item;
  graph.setAutoPaint(false);
  graph.getNodes().forEach(function(node) {
    graph.clearItemStates(node);
    graph.setItemState(node, 'dark', true);
  });
  graph.setItemState(item, 'dark', false);
  graph.setItemState(item, 'highlight', true);
  graph.getEdges().forEach(function(edge) {
    if (edge.getSource() === item) {
      graph.setItemState(edge.getTarget(), 'dark', false);
      graph.setItemState(edge.getTarget(), 'highlight', true);
      graph.setItemState(edge, 'highlight', true);
      edge.toFront();
    } else if (edge.getTarget() === item) {
      graph.setItemState(edge.getSource(), 'dark', false);
      graph.setItemState(edge.getSource(), 'highlight', true);
      graph.setItemState(edge, 'highlight', true);
      edge.toFront();
    } else {
      graph.setItemState(edge, 'highlight', false);
    }
  });
  graph.paint();
  graph.setAutoPaint(true);
});

graph.on('node:mouseleave', clearAllStats);

graph.on('edge:mouseleave', clearAllStats);

function clearAllStats() {
  graph.setAutoPaint(false);
  graph.getNodes().forEach(function(node) {
    graph.clearItemStates(node);
  });
  graph.getEdges().forEach(function(edge) {
    graph.clearItemStates(edge);
  });
  graph.paint();
  graph.setAutoPaint(true);
}
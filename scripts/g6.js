let strokeBubble = '#f87521';
let fillBubble = '#f87521';
let strokeEdge = '#1b212f';

console.log(window.innerWidth);
console.log(window.innerHeight);

const graph = new G6.Graph({
  container: mountNode,
  width: window.innerWidth,
  height: window.innerHeight,
  // width,
  // height,
  // fitView: true,
  // fitViewPadding: 20,
  modes: {
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
    // size: 100,
    style: {
      fill: fillBubble,
      stroke: strokeBubble,
    },
    labelCfg: {
      style: {
        fontSize: 18,
        fill: fillBubble,
        stroke: strokeBubble,
      },
      position: "bottom",
    },
  },
  defaultEdge: {
    type: 'arc', // assign the edges to be quadratic bezier curves
    size: 5,
    label: '',
    labelCfg: {
      style: {
        opacity:0, 
      },
    },
    style: {
      stroke: strokeEdge,
      opacity: 0.5,
    },
  },
  layout: {                // Object, layout configuration. random by default
    type: 'force',
    center: [window.innerWidth/2,window.innerHeight/2],
    speed: 0, 
    clustering: true,
    clusterGravity: 100,
    // linkDistance: 600,
    preventOverlap: true,  // Prevent node overlappings
    nodeStrength: -50,
    edgeStrength: 0.8,
    nodeSize: 200, // The size of nodes for collide detection. Since we have assigned sizes for each node to their data in last chapter, the nodeSize here is not required any more.
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
      stroke: strokeBubble,
      opacity: 0.5,
      lineWidth: 8,
    },
    dark: {
      opacity: 0.2,
    },
  },
});

fetch('../data/data.json')
  .then(res => res.json())
  .then(data => {
    graph.data({
      nodes: data.nodes,
      edges: data.edges.map(function (edge, i) {
        edge.id = 'edge' + i;
        return Object.assign({}, edge);
      }),
    });
    graph.render();

    graph.on('node:dragstart', function (e) {
      graph.layout();
      refreshDragedNodePosition(e);
    });
    graph.on('node:drag', function (e) {
      refreshDragedNodePosition(e);
    });
    graph.on('node:dragend', function (e) {
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
  window.open(ev.item._cfg.model.link)
});

graph.on('edge:mouseenter', evt => {
  document.body.style.cursor = "pointer";
  const item = evt.item;
  // console.log(item._cfg.styles);
  // item._cfg.styles;
  // graph.setAutoPaint(false);
  // graph.clearItemStates(item);
  graph.setItemState(item, 'highlight', true);
});

graph.on('node:mouseenter', function (e) {
  const item = e.item;
  graph.setAutoPaint(false);
  graph.getNodes().forEach(function (node) {
    graph.clearItemStates(node);
    graph.setItemState(node, 'dark', true);
  });
  graph.setItemState(item, 'dark', false);
  graph.setItemState(item, 'highlight', true);
  graph.getEdges().forEach(function (edge) {
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
  graph.getNodes().forEach(function (node) {
    graph.clearItemStates(node);
  });
  graph.getEdges().forEach(function (edge) {
    graph.clearItemStates(edge);
  });
  graph.paint();
  graph.setAutoPaint(true);
}
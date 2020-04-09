let strokeBubble = '#ff0000';
let fillBubble = '#f87521';
let strokeEdge = '#ffbf80';

console.log(window.innerWidth);
console.log(window.innerHeight);

const graph = new G6.Graph({
  container: mountNode,
  width: window.innerWidth,
  height: window.innerHeight,
  modes: {
    default: [
      'drag-canvas',
      'animate',
      'zoom-canvas',
      'minZoom : 0.6',
      'maxZoom: 1.2',
      {
        type: 'tooltip',
        formatText: function formatText(model) {
          return model.name;
        },
      },
      'activate-relations',
    ],
  },
  defaultNode: {
    style: {
      // fill: fillBubble,
      // stroke: strokeBubble,
    },
  },
  defaultEdge: {
    type: 'arc', // assign the edges to be quadratic bezier curves
    size: 2,
    label: '',
    style: {
      stroke: strokeEdge,
      opacity: 0.5,
    },
  },
  layout: {                // Object, layout configuration. random by default
    type: 'force',
    center: [window.innerWidth / 2, window.innerHeight / 2],
    workerEnabled: true,
    preventOverlap: true, // Prevent node overlappings
    // nodeStrength: -20,
    collideStrength: 0.7,
    linkDistance: 50,
    nodeSpacing: 10,
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
      lineWidth: 3,
    },
    dark: {
      opacity: 0.2,
    },
  },
});

fetch('../data/0904.json')
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

// graph.on('edge:click', ev => {
//   window.open(ev.item._cfg.model.link)
// });

// graph.on('edge:mouseenter', evt => {
//   const item = evt.item;
//   // graph.setAutoPaint(false);
//   // graph.clearItemStates(item);
//   graph.setItemState(item, 'highlight', true);
// });

// graph.on('node:mouseenter', function (e) {
//   const item = e.item;
  // graph.setAutoPaint(false);
  // graph.getNodes().forEach(function (node) {
  //   graph.clearItemStates(node);
  //   graph.setItemState(node, 'dark', true);
  // });
  // graph.setItemState(item, 'dark', false);
  // graph.setItemState(item, 'highlight', true);
  // graph.getEdges().forEach(function (edge) {
  //   if (edge.getSource() === item) {
  //     graph.setItemState(edge.getTarget(), 'dark', false);
  //     graph.setItemState(edge.getTarget(), 'highlight', true);
  //     graph.setItemState(edge, 'highlight', true);
  //     edge.toFront();
  //   } else if (edge.getTarget() === item) {
  //     graph.setItemState(edge.getSource(), 'dark', false);
  //     graph.setItemState(edge.getSource(), 'highlight', true);
  //     graph.setItemState(edge, 'highlight', true);
  //     edge.toFront();
  //   } else {
  //     graph.setItemState(edge, 'highlight', false);
    // }
//   });
//   graph.paint();
//   graph.setAutoPaint(true);
// });

// graph.on('node:mouseleave', clearAllStats);
// graph.on('edge:mouseleave', clearAllStats);

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

function handleNodeClick(event) {
  const item = event.item;
  if (item.getModel().class == "tag") {
    const matrix = item.get('group').getMatrix();
    const point = {
      x: matrix[6],
      y: matrix[7],
    };
    const w = graph.get('width');
    const h = graph.get('height');
    const viewCenter = {
      x: w / 2,
      y: h / 2,
    };
    const modelCenter = graph.getPointByCanvas(viewCenter.x, viewCenter.y);
    let viewportMatrix = graph.get('group').getMatrix();
    if (!viewportMatrix) viewportMatrix = G6.Util.mat3.create();
    const dx = (modelCenter.x - point.x) * viewportMatrix[0];
    const dy = (modelCenter.y - point.y) * viewportMatrix[4];
    let lastX = 0;
    let lastY = 0;
    let newX = void 0;
    let newY = void 0;
    graph.get('canvas').animate(
      ratio => {
        newX = dx * ratio;
        newY = dy * ratio;
        graph.translate(newX - lastX, newY - lastY);
        lastX = newX;
        lastY = newY;
      },
      {
        duration: 900,
        easing: 'easeCubic',
      },
    );
  }
  if (item.getModel().class == "link") {
    window.open(item.getModel().name)
  }
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
}

graph.on('node:click', handleNodeClick);
graph.on('canvas:click', clearAllStats)
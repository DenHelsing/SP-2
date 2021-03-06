class GraphNode {
  constructor(id, dlm = 1, cfr = 1, ltr = 1) {
    this.id = id;
    this.dlm = dlm;
    this.cfr = cfr;
    this.ltr = ltr;
    // console.log(`${dlm} ${cfr} ${ltr}`);
  }
  passOnSignal(signal) {
    if (signal === "dlm") {
      return this.dlm;
    } else if (signal === "cfr") {
      return this.cfr;
    } else if (signal === "ltr") {
      return this.ltr;
    } else return 0;
  }
  //TODO dlm cfr ltr
}

class Graph {
  constructor() {
    this.nodes = [];
    for (let i = 2; i < 10; i++) {
      if (i === 3) {
        this.nodes.push(new GraphNode(i, 1, 1, 4));
      } else if (i === 5) {
        this.nodes.push(new GraphNode(i, 1, 2, 1));
      } else if (i === 8) {
        this.nodes.push(new GraphNode(i, -6, 1, 1));
      } else if (i === 9) {
        this.nodes.push(new GraphNode(i, 0, 0, 0));
      } else {
        this.nodes.push(new GraphNode(i));
      }
    }
    this.currentNode = this.nodes[0];
    console.log(this.nodes);
    // console.log(this.currentNode);
  }

  run(signals = []) {
    console.log(`\n Signals: ${signals} \n`);
    let state = "S2";
    signals.forEach(signal => {
      state += `(${signal})`;
      const id = this.currentNode.id;
      const shift = this.currentNode.passOnSignal(signal);
      //   console.log(`${id} ${shift}`);
      //   console.log(this.nodes[id - 2 + shift]);
      if (shift !== 0) {
        this.currentNode = this.nodes[id - 2 + shift];
      }
      state += ` => S${this.currentNode.id}`;
      //   console.log(`Current node = ${this.currentNode.id}`);
    });
    console.log(state);
  }
}
const graph = new Graph();

graph.run(["dlm", "ltr", "brv", "her", "cfr", "dlm"]);

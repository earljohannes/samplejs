const Tree = function () {
  function Tree(data) {
    this.data = data;
    this.leftSubtree = null;
    this.rightSubtree = null;
  }

  Tree.prototype._insert = function (value) {
    if (!this.data) {
      this.data = value;
    } else if (this.data >= value) {
      this.leftSubtree = this.leftSubtree ? this._insert.apply(this.leftSubtree, [value]) : new Tree(value);
    } else if (this.data < value) {
      this.rightSubtree = this.rightSubtree ? this._insert.apply(this.rightSubtree, [value]) : new Tree(value);
    }
    return this;
  }

  Tree.prototype._print = function () {
    if (this && this.data) {
      this._print.apply(this.leftSubtree);
      process.stdout.write(`${this.data} -> `);
      this._print.apply(this.rightSubtree);
    }
  }

  return Tree;
} ();

const t = new Tree();

t._insert(5);
t._insert(6);
t._insert(9);
t._insert(1);
t._insert(7);
t._insert(8);
t._insert(4);
t._insert(-6);

console.log(JSON.stringify(t, null, 2));
t._print();


const draggable = window['vuedraggable'];

var app = new Vue({
  el: '#app',
  components: {
    'draggable': draggable,
  },
  data: {
    addType: '',
    addTodo: '',
    editTodo: '',
    // list:[
    //   { type: "pinned", todo: 'sample1' },
    //   { type: "finished", todo: 'sample2' },
    // ],
    list: {
      pinned:
        [
          "pinned1",
          "pinned2",
        ],
      normal:
        [
          "normal1",
          "normal2",
        ],
      finished:
        [
          "finished1",
          "finished2",
        ],
    }
  },
  methods: {
    newTodo(type="normal") {
      if(this.addTodo) {
        // const type = this.addType;
        // const type = "normal";
        // const todo = this.addTodo;
        // this.list.push({ type, todo });
        this.list.normal.push(this.addTodo);
      }
      this.addType = '';  //入力値初期化
      this.itemaddTodo = '';  //入力値初期化
    },
    delToDo(index, type) {
      // this.list.pinned.splice(index, 1);
      if(type === "pinned"){this.list.pinned.splice(index, 1);}
      else if(type === "finished"){this.list.finished.splice(index, 1);}
      else{ this.list.normal.splice(index, 1);}
    },
    // editToDo(index, type) {
    //   // this.list.splice(index, 1, { type: event.target.value, todo: editTodo });
    //   this.delToDo(index, type);
    //   this.list.normal.push(this.item);
    // },
    onEnd: function(originalEvent){
      // console.log(this.index);
      // delToDo(originalEvent);
    //   if(originalEvent.to.id === "pinned"){this.list.pinnned.push(this.item);}
    //   else if(originalEvent.to.id === "finished"){this.list.finished.push(this.item);}
    //   else{ this.list.normal.push(this.item);}
    }
  }
});
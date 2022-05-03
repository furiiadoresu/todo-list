// https://sortablejs.github.io/Vue.Draggable/#/two-lists

const draggable = window['vuedraggable'];

var app = new Vue({
  el: '#app',
  components: {
    'draggable': draggable,
  },
  data: {
    addTodo: '',
    list: {
      pinned:
        [
          { name: "pinned1" },
          { name: "pinned2" }
        ],
      normal:
        [
          { name: "normal1" },
          { name: "normal2" }
        ],
      finished:
        [
          { name: "finished1" },
          { name: "finished2" }
        ],
    }
  },
  methods: {
    newTodo() {
      if(this.addTodo) {
        this.list.normal.push({name: `${this.addTodo}`});
      }
      this.addTodo = '';  //入力値初期化
      this.itemaddTodo = '';  //入力値初期化
    },
    delToDo(index, type) {
      if(type === "pinned"){
        this.list.pinned.splice(index, 1);
        
      }
      else if(type === "finished"){
        this.list.finished.splice(index, 1);
      }
      else{
        this.list.normal.splice(index, 1);
        
      }
    },
  }
});
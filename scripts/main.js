import { componentRead } from './utils.js/componentRead.js'

class NuekComponent {
  constructor(selector 
  = "body",file,props=null,loop=1,condition=true){
    if(typeof selector === "string"){
      selector = document.querySelector(selector);
    }
    this.selector = selector;
    this.file = file;
    this.props = props;
    this.condition = condition;
    this.loop = loop;
    if(condition === true){
    this.init();
    console.log("how far")
    }
  }
  init() {
    for(var i = 0; i < this.loop;i++){
      componentRead(this.selector,this.file,this.props);
    }
  }
}

window.NuekComponent = NuekComponent;
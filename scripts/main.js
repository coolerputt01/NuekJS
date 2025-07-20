import { componentRead } from './utils.js/componentRead.js'

class NuekStaticComponent {
  constructor(selector 
  = "body",file,props=null,loop=1,condition=true){
    if(typeof selector === "string"){
      selector = document.querySelector(selector);
    }
    this.selector = selector;
    this.file = file;
    this.props = props || [];
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

class NuekPropsComponent {
  constructor(selector 
  = "body",file,props=null,condition=true){
    if(typeof selector === "string"){
      selector = document.querySelector(selector);
    }
    this.selector = selector;
    this.file = file;
    this.props = props || [];
    this.condition = condition;
    if(condition === true){
    this.init();
    console.log("how far")
    }
  }
  init() {
    if(this.props !== null && Array.isArray(this.props)){
      for(var i = 0; i < this.props.length;i++){
        componentRead(this.selector,this.file,this.props[i]);
      }
    }else {
      throw new Error("Props is not a valid type 'Array[]()'");
    }
  }
}

window.NuekStaticComponent = NuekStaticComponent;
window.NuekPropsComponent = NuekPropsComponent;
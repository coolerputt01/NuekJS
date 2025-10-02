import { componentRead } from './utils/componentRead.js';
import { dynamicComponentRead } from './utils/dynamicComponentRead.js';

function reactive(obj, callback) {
  return new Proxy(obj, {
    set(target, key, value) {
      target[key] = value;
      callback(target);
      return true;
    }
  });
}

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
    }
  }
  init() {
    for(var i = 0; i < this.loop;i++){
      if(typeof this.props[i] === "object"){
        console.warn(`You should probably use the 'NuekPropsComponent' instead\n at ${this.file}`);
      }
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
class NuekDynamicPropsComponent {
  constructor(selector = "body", file, props = null, condition = true) {
    if (typeof selector === "string") {
      selector = document.querySelector(selector);
    }
    this.selector = selector;
    this.file = file;
    this._props = [];
    this.condition = condition;
    this.previousProps = [];
    if (condition === true) {
      this.props = props;
    }
  }
  
  set props(newProps) {
    if(!Array.isArray(newProps))
      throw new Error("Props must be an array");
    this._props = newProps.map((prop, i) => {
      if (!prop.id) prop.id = `component-${i}`;
      return reactive(prop, (newProp) => {
        console.log("updating...");
        dynamicComponentRead(this.selector, this.file, newProp);
      });
  });
  
  // initial render
  this._props.forEach((prop) => dynamicComponentRead(this.selector, this.file, prop));
  }
  get props() {
    return this._props;
  }
}
window.NuekStaticComponent = NuekStaticComponent;
window.NuekPropsComponent = NuekPropsComponent;
window.NuekDynamicPropsComponent = NuekDynamicPropsComponent;
import { componentRead } from './utils.js/componentRead.js'

class NuekComponent {
  constructor(selector 
  = "body",file,props=null){
    if(typeof selector === string){
      selector = document.querySelector(selector);
    }
    this.selector = selector;
    this.file = file;
    this.props = props;
    this.init();
  }
  init() {
    componentRead(this.selector,this.file,this.props);
  }
}
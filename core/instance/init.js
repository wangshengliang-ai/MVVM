import {constructorProxy} from "./proxy.js";
import {mount} from "./mount.js";
let uid = 0;
export function initMixin(Due) {
    Due.prototype._init = function (options) {
        const vm = this;
        vm.uid = uid ++;
        vm.isDue = true;
        //初始化data
        if (options && options.data){
            vm._data = constructorProxy(vm,options.data,'');
        }
        //初始化created方法
        //初始化computed
        //初始化el并挂载
        if (options && options.el){
            const rootDom = document.getElementById(options.el);
            mount(vm,rootDom);
        }
    }
}


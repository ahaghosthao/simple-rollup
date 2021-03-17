import a from './a.js';
import './test.css'
import Test from "./test.vue"


export const aa = function () {
    console.log(a)
}

function install(Vue) {
    Vue.component(Test.name, Test)
}

export {
    install
}


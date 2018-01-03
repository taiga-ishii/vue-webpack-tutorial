import Vue from 'vue'
import App from './App.vue'

const doTest = (Component) => {
	const vm = new Vue({
		el: document.createElement('div'),
		render: h => h(Component)
	})

	expect(vm.$el.querySelector('.greeting').textContent.trim()).toEqual('Hello Vue')
}

describe('App.vue', () => {
	it('should load a .vue file', () => {
		doTest(App)
	})
})

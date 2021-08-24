import {
  shallowMount,
  createLocalVue
} from '@vue/test-utils';
import Vuex from 'vuex';
// import {jest} from "@jest/globals";
import TestCompVuex from './TestCompVuex';
const localVue = createLocalVue();
localVue.use(Vuex);
describe('Action test', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      addData: jest.fn()
    };
    store = new Vuex.Store({
      actions
    });
  });

  it('run action', async()=>{
    const wrapper = shallowMount(TestCompVuex, {store,localVue});
    const testInput = wrapper.find('input');
    testInput.element.value = "123";
    testInput.trigger('input');
    expect(wrapper.vm.propComp).toBe("123");

    const btn = wrapper.find('button[name=btn]');
    btn.trigger('click');
    expect(actions.addData).toHaveBeenCalled();
  });
});
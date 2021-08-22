import Vuex from 'vuex';
import {
  shallowMount,
  createLocalVue
} from '@vue/test-utils';
// import { jest } from '@jest/globals';
import AddPaymentForm from '../components/AddPaymentForm.vue';

const LocalVue = createLocalVue();
LocalVue.use(Vuex);

describe('AddPaymentForm', () => {
  let mutations;
  let store;
  let getters;
  let actions;
  beforeEach(() => {
    mutations = {
      addDataToPaymentList: jest.fn()
    };
    getters = {
      getCategories: jest.fn()
    };
    actions = {
      fetchCategoryList: jest.fn()
    };
    store = new Vuex.Store({
      mutations,
      actions,
      getters
    });
  });
  it('click mutations', async () => {
    const wrapper = shallowMount(AddPaymentForm, {
      store,
      LocalVue
    });
    const inputValue = wrapper.find('input[name=value]');
    inputValue.setValue('20');
    expect(wrapper.vm.value).toBe(20);
    wrapper.find('button[name=btnClick]').trigger('click');
    expect(mutations.addDataToPaymentList).toHaveBeenCalled();
  });

});
import TestComponent from './TestComponent';
import { mount } from '@vue/test-utils';
describe('TestComponent', () => {
  test('content of TestComponent', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        message: 'Hello from test!'
      }
    });
    expect(wrapper.text()).toContain(
      // expect(wrapper.html()).toEqual(
      'This message is: Hello from test!'
    );
  });
});
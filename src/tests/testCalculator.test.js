import { it } from '@jest/globals';
import Calculator from '../components/Calculator';
import { mount } from '@vue/test-utils';
describe('Calculator test inputs', () => {
  it('Test operand 1 input value', () => {
    const wrapper = mount(Calculator);
    const op1 = wrapper.find('input[name=operand1]');
    op1.setValue('1');
    expect(wrapper.vm.operand1).toBe(1); 
  });
  it('Test operand 2 input value', () => {
    const wrapper = mount(Calculator);
    const op2 = wrapper.find('input[name=operand2]');
    op2.setValue('2');
    expect(wrapper.vm.operand2).toBe(2); 
  });
});
describe('Calculator test operations', () => {
  it('Test method sum', () => {
    const wrapper = mount(Calculator);
    const op1 = wrapper.find('input[name=operand1]');
    op1.setValue('1');
    const op2 = wrapper.find('input[name=operand2]');
    op2.setValue('2');
    const btnSum = wrapper.find('button[name="+"]');
    btnSum.trigger('click');
    expect(wrapper.vm.result).toBe(3);
  });
  it('Test method sub', () => {
    const wrapper = mount(Calculator);
    const op1 = wrapper.find('input[name=operand1]');
    op1.setValue('4');
    const op2 = wrapper.find('input[name=operand2]');
    op2.setValue('2');
    const btnSum = wrapper.find('button[name="-"]');
    btnSum.trigger('click');
    expect(wrapper.vm.result).toBe(2);
  });
  it('Test method multi', () => {
    const wrapper = mount(Calculator);
    const op1 = wrapper.find('input[name=operand1]');
    op1.setValue('4');
    const op2 = wrapper.find('input[name=operand2]');
    op2.setValue('2');
    const btnSum = wrapper.find('button[name="*"]');
    btnSum.trigger('click');
    expect(wrapper.vm.result).toBe(8);
  });
  it('Test method div', () => {
    const wrapper = mount(Calculator);
    const op1 = wrapper.find('input[name=operand1]');
    op1.setValue('4');
    const op2 = wrapper.find('input[name=operand2]');
    op2.setValue('2');
    const btnSum = wrapper.find('button[name="/"]');
    btnSum.trigger('click');
    expect(wrapper.vm.result).toBe(2);
  });
});

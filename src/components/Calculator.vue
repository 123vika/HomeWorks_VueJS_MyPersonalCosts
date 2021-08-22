<template>
  <div class="calculator">
    <h1>Calculator</h1> 
    <input v-model.number="operand1" name="operand1">
    <input v-model.number="operand2" name="operand2">
    <h2>Result = {{ result }}</h2>
    <div>
      <button v-for="op in operations" :key="op" @click="calculate(op)"
        :name="op" :disabled="op==='/' && operand2===0"> 
        {{ op }} 
      </button>
    </div>
    <label>
      <input type="checkbox" v-model="showvk">
      Отобразить экранную клавиатуру
    </label>
    <div v-if="showvk">
      Виртуальная клавиатура
      <button v-for="btn in 10" :key="btn" @click="inputNum(btn - 1)">
        {{ btn - 1 }}
      </button>
      <button @click="eraseOne">Delete</button>
      <br><br>
      <label><input type="radio" value="1" v-model="operch">Операнд 1</label>
      <label><input type="radio" value="2" v-model="operch">Операнд 2</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data: () => ({
    message: "Hello Calculator!",
    operand1: "",
    operand2: "",
    result: 0,
    error: "",
    operations: ["+", "-", "*", "/", "*n"],
    showvk: false,
    operch: ''
  }),
  props: {},
  methods: {
    inputNum(i) {
      const { operch } = this;
      const input = operch === '1' ? "operand1" : "operand2";
      this[input] =+ (this[input] += String(i));
    },
    calculate(op) {
      const operand1 = this.operand1;
      const operand2 = this.operand2;
      const calcOperations = {
        '+': () => operand1 + operand2,
        '-': () => operand1 - operand2,
        '*': () => operand1 * operand2,
        '/': () => operand1 / operand2,
      };
      this.result = calcOperations[op]();
    },
    sum() {
      this.result = this.operand1 + this.operand2;
    },
    subtract() {
      this.result = this.operand1 - this.operand2;
    },
    multi() {
      this.result = this.operand1 * this.operand2;
    },
    divide() {
      this.result = this.operand1 / this.operand2;
    },
    eraseOne() {
      const { operch } = this;
      const input = operch === '1' ? "operand1" : "operand2";
      this[input] = +String(this[input]).slice(0, -1);
     
    },
  },
};
</script>

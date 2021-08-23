<template>
  <div class="list">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Date</th>
          <th>Category</th>
          <th>Value</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr class="item" v-for="(item, idx) in list" :key="idx">
          <td>{{ item.id }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.value }}</td>
          <td><button @click="onEditShow(item)">...</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import Edit from './components/Edit';
export default {
  name: "PaymentsDisplay",
  // components: { Edit },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    onEditShow(item) {
      console.log("paymentShow", item);
      this.$edit.showEdit(item);
    },
  },
};
</script>


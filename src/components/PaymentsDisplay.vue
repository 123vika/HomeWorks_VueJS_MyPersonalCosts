<template>
  <div class="list">
    <table >
      <thead>
        <tr>
          <th>Id</th>
          <th>Date</th>
          <th>Category</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody >
        <tr class="item" v-for="(item, idx) in list" :key="idx">
          <td>{{ item.id }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.value }}</td>   
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>


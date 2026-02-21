<script setup lang="ts">
const orders = [
  { id: '#3210', customer: 'Sarah Johnson', amount: '$245.00', status: 'Completed', badge: 'badge-success' },
  { id: '#3209', customer: 'Mike Peters', amount: '$129.50', status: 'Processing', badge: 'badge-warning' },
  { id: '#3208', customer: 'Emily Chen', amount: '$89.99', status: 'Completed', badge: 'badge-success' },
  { id: '#3207', customer: 'James Wilson', amount: '$312.00', status: 'Cancelled', badge: 'badge-danger' },
  { id: '#3206', customer: 'Anna Lee', amount: '$175.25', status: 'Shipped', badge: 'badge-info' },
  { id: '#3205', customer: 'Tom Davis', amount: '$98.00', status: 'Completed', badge: 'badge-success' },
];
</script>

<template>
  <div class="data-table-wrapper">
    <div class="table-header">Recent Orders</div>
    <table class="data-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.customer }}</td>
          <td>{{ order.amount }}</td>
          <td><span :class="['badge', order.badge]">{{ order.status }}</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

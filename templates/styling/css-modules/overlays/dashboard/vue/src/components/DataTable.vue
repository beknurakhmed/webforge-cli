<script setup lang="ts">
import { useCssModule } from 'vue';

const style = useCssModule();

const orders = [
  { id: '#3210', customer: 'Sarah Johnson', amount: '$245.00', status: 'Completed', badge: 'badgeSuccess' },
  { id: '#3209', customer: 'Mike Peters', amount: '$129.50', status: 'Processing', badge: 'badgeWarning' },
  { id: '#3208', customer: 'Emily Chen', amount: '$89.99', status: 'Completed', badge: 'badgeSuccess' },
  { id: '#3207', customer: 'James Wilson', amount: '$312.00', status: 'Cancelled', badge: 'badgeDanger' },
  { id: '#3206', customer: 'Anna Lee', amount: '$175.25', status: 'Shipped', badge: 'badgeInfo' },
  { id: '#3205', customer: 'Tom Davis', amount: '$98.00', status: 'Completed', badge: 'badgeSuccess' },
];

function badgeClass(badge: string) {
  return style[badge] || '';
}
</script>

<template>
  <div :class="$style.dataTableWrapper">
    <div :class="$style.tableHeader">Recent Orders</div>
    <table :class="$style.dataTable">
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
          <td><span :class="badgeClass(order.badge)">{{ order.status }}</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style module>
.dataTableWrapper {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.tableHeader {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
  color: #111827;
}

.dataTable {
  width: 100%;
  border-collapse: collapse;
}

.dataTable th {
  text-align: left;
  padding: 0.75rem 1.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
}

.dataTable td {
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid #f3f4f6;
  font-size: 0.9rem;
}

.dataTable tr:last-child td {
  border-bottom: none;
}

.dataTable tr:hover {
  background: #f9fafb;
}

.badgeSuccess {
  display: inline-block;
  padding: 0.2rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  background: #d1fae5;
  color: #065f46;
}

.badgeWarning {
  display: inline-block;
  padding: 0.2rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  background: #fef3c7;
  color: #92400e;
}

.badgeDanger {
  display: inline-block;
  padding: 0.2rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  background: #fee2e2;
  color: #991b1b;
}

.badgeInfo {
  display: inline-block;
  padding: 0.2rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  background: #dbeafe;
  color: #1e40af;
}
</style>

<script setup lang="ts">
const orders = [
  { id: '#ORD-001', customer: 'Alice Johnson', product: 'Wireless Headphones', amount: '$79.99', status: 'Completed', date: '2024-01-15' },
  { id: '#ORD-002', customer: 'Bob Smith', product: 'Running Shoes', amount: '$129.99', status: 'Processing', date: '2024-01-14' },
  { id: '#ORD-003', customer: 'Carol Williams', product: 'Coffee Maker', amount: '$49.99', status: 'Completed', date: '2024-01-14' },
  { id: '#ORD-004', customer: 'David Brown', product: 'Backpack', amount: '$59.99', status: 'Shipped', date: '2024-01-13' },
  { id: '#ORD-005', customer: 'Eva Martinez', product: 'Smartwatch', amount: '$199.99', status: 'Pending', date: '2024-01-13' },
];
</script>

<template>
  <div class="table-card">
    <h3 class="table-title">Recent Orders</h3>
    <div class="table-wrapper">
      <table class="data-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td class="order-id">{{ order.id }}</td>
            <td>{{ order.customer }}</td>
            <td>{{ order.product }}</td>
            <td class="amount">{{ order.amount }}</td>
            <td>
              <span :class="['status-badge', order.status.toLowerCase()]">
                {{ order.status }}
              </span>
            </td>
            <td class="date">{{ order.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.table-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.table-title {
  font-size: 1.1rem;
  color: #111827;
  margin-bottom: 1rem;
}

.table-wrapper {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th {
  text-align: left;
  padding: 0.75rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 2px solid #e5e7eb;
}

.data-table td {
  padding: 0.875rem 1rem;
  font-size: 0.9rem;
  border-bottom: 1px solid #f3f4f6;
}

.order-id {
  font-weight: 600;
  color: #4f46e5;
}

.amount {
  font-weight: 600;
  color: #111827;
}

.date {
  color: #6b7280;
}

.status-badge {
  display: inline-block;
  padding: 0.2rem 0.65rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.status-badge.completed {
  background: #d1fae5;
  color: #065f46;
}

.status-badge.processing {
  background: #dbeafe;
  color: #1e40af;
}

.status-badge.shipped {
  background: #fef3c7;
  color: #92400e;
}

.status-badge.pending {
  background: #f3f4f6;
  color: #374151;
}
</style>

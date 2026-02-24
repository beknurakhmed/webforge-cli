<script setup lang="ts">
const style = useCssModule();

const orders = [
  { id: '#ORD-001', customer: 'Alice Johnson', product: 'Wireless Headphones', amount: '$79.99', status: 'Completed', date: '2024-01-15' },
  { id: '#ORD-002', customer: 'Bob Smith', product: 'Running Shoes', amount: '$129.99', status: 'Processing', date: '2024-01-14' },
  { id: '#ORD-003', customer: 'Carol Williams', product: 'Coffee Maker', amount: '$49.99', status: 'Completed', date: '2024-01-14' },
  { id: '#ORD-004', customer: 'David Brown', product: 'Backpack', amount: '$59.99', status: 'Shipped', date: '2024-01-13' },
  { id: '#ORD-005', customer: 'Eva Martinez', product: 'Smartwatch', amount: '$199.99', status: 'Pending', date: '2024-01-13' },
];

const statusMap: Record<string, string> = {
  Completed: 'statusCompleted',
  Processing: 'statusProcessing',
  Shipped: 'statusShipped',
  Pending: 'statusPending',
};

function statusClass(status: string) {
  return style[statusMap[status]] || '';
}
</script>

<template>
  <div :class="$style.tableCard">
    <h3 :class="$style.tableTitle">Recent Orders</h3>
    <div :class="$style.tableWrapper">
      <table :class="$style.dataTable">
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
            <td :class="$style.orderId">{{ order.id }}</td>
            <td>{{ order.customer }}</td>
            <td>{{ order.product }}</td>
            <td :class="$style.amount">{{ order.amount }}</td>
            <td>
              <span :class="statusClass(order.status)">
                {{ order.status }}
              </span>
            </td>
            <td :class="$style.date">{{ order.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style module>
.tableCard {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.tableTitle {
  font-size: 1.1rem;
  color: #111827;
  margin-bottom: 1rem;
}

.tableWrapper {
  overflow-x: auto;
}

.dataTable {
  width: 100%;
  border-collapse: collapse;
}

.dataTable th {
  text-align: left;
  padding: 0.75rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 2px solid #e5e7eb;
}

.dataTable td {
  padding: 0.875rem 1rem;
  font-size: 0.9rem;
  border-bottom: 1px solid #f3f4f6;
}

.orderId {
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

.statusCompleted {
  display: inline-block;
  padding: 0.2rem 0.65rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: #d1fae5;
  color: #065f46;
}

.statusProcessing {
  display: inline-block;
  padding: 0.2rem 0.65rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: #dbeafe;
  color: #1e40af;
}

.statusShipped {
  display: inline-block;
  padding: 0.2rem 0.65rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: #fef3c7;
  color: #92400e;
}

.statusPending {
  display: inline-block;
  padding: 0.2rem 0.65rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: #f3f4f6;
  color: #374151;
}
</style>

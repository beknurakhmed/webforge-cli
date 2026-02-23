<script setup lang="ts">
const orders = [
  { id: '#ORD-001', customer: 'Alice Johnson', product: 'Wireless Headphones', amount: '$79.99', status: 'Completed', date: '2024-01-15' },
  { id: '#ORD-002', customer: 'Bob Smith', product: 'Running Shoes', amount: '$129.99', status: 'Processing', date: '2024-01-14' },
  { id: '#ORD-003', customer: 'Carol Williams', product: 'Coffee Maker', amount: '$49.99', status: 'Completed', date: '2024-01-14' },
  { id: '#ORD-004', customer: 'David Brown', product: 'Backpack', amount: '$59.99', status: 'Shipped', date: '2024-01-13' },
  { id: '#ORD-005', customer: 'Eva Martinez', product: 'Smartwatch', amount: '$199.99', status: 'Pending', date: '2024-01-13' },
];

function statusClasses(status: string) {
  const base = 'inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold';
  switch (status.toLowerCase()) {
    case 'completed': return `${base} bg-emerald-100 text-emerald-800`;
    case 'processing': return `${base} bg-blue-100 text-blue-800`;
    case 'shipped': return `${base} bg-amber-100 text-amber-800`;
    case 'pending': return `${base} bg-gray-100 text-gray-600`;
    default: return base;
  }
}
</script>

<template>
  <div class="bg-white rounded-lg p-6 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
    <div class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th class="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-gray-200">Order ID</th>
            <th class="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-gray-200">Customer</th>
            <th class="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-gray-200">Product</th>
            <th class="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-gray-200">Amount</th>
            <th class="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-gray-200">Status</th>
            <th class="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-gray-200">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td class="px-4 py-3.5 text-sm border-b border-gray-50 font-semibold text-indigo-600">{{ order.id }}</td>
            <td class="px-4 py-3.5 text-sm border-b border-gray-50">{{ order.customer }}</td>
            <td class="px-4 py-3.5 text-sm border-b border-gray-50">{{ order.product }}</td>
            <td class="px-4 py-3.5 text-sm border-b border-gray-50 font-semibold text-gray-900">{{ order.amount }}</td>
            <td class="px-4 py-3.5 text-sm border-b border-gray-50">
              <span :class="statusClasses(order.status)">{{ order.status }}</span>
            </td>
            <td class="px-4 py-3.5 text-sm border-b border-gray-50 text-gray-500">{{ order.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const orders = [
  { id: '#3210', customer: 'Sarah Johnson', amount: '$245.00', status: 'Completed', badge: 'bg-emerald-100 text-emerald-800' },
  { id: '#3209', customer: 'Mike Peters', amount: '$129.50', status: 'Processing', badge: 'bg-amber-100 text-amber-800' },
  { id: '#3208', customer: 'Emily Chen', amount: '$89.99', status: 'Completed', badge: 'bg-emerald-100 text-emerald-800' },
  { id: '#3207', customer: 'James Wilson', amount: '$312.00', status: 'Cancelled', badge: 'bg-red-100 text-red-800' },
  { id: '#3206', customer: 'Anna Lee', amount: '$175.25', status: 'Shipped', badge: 'bg-blue-100 text-blue-800' },
  { id: '#3205', customer: 'Tom Davis', amount: '$98.00', status: 'Completed', badge: 'bg-emerald-100 text-emerald-800' },
];
</script>

<template>
  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
    <div class="px-6 py-4 border-b border-gray-200 font-semibold text-gray-900">Recent Orders</div>
    <table class="w-full border-collapse">
      <thead>
        <tr>
          <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Order ID</th>
          <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Customer</th>
          <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Amount</th>
          <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id" class="hover:bg-gray-50">
          <td class="px-6 py-3 border-b border-gray-100 text-sm">{{ order.id }}</td>
          <td class="px-6 py-3 border-b border-gray-100 text-sm">{{ order.customer }}</td>
          <td class="px-6 py-3 border-b border-gray-100 text-sm">{{ order.amount }}</td>
          <td class="px-6 py-3 border-b border-gray-100 text-sm"><span :class="['inline-block px-3 py-0.5 rounded-full text-xs font-semibold', order.badge]">{{ order.status }}</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

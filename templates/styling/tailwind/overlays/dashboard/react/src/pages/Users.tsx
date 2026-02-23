interface User {
  avatar: string;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
}

const users: User[] = [
  { avatar: '👩', name: 'Sarah Chen', email: 'sarah@email.com', role: 'Admin', status: 'Active' },
  { avatar: '👨', name: 'James Miller', email: 'james@email.com', role: 'Editor', status: 'Active' },
  { avatar: '👩', name: 'Emily Davis', email: 'emily@email.com', role: 'Viewer', status: 'Inactive' },
  { avatar: '👨', name: 'Robert Wilson', email: 'robert@email.com', role: 'Editor', status: 'Active' },
  { avatar: '👩', name: 'Maria Garcia', email: 'maria@email.com', role: 'Admin', status: 'Active' },
  { avatar: '👨', name: 'David Lee', email: 'david@email.com', role: 'Viewer', status: 'Inactive' },
  { avatar: '👩', name: 'Anna Taylor', email: 'anna@email.com', role: 'Editor', status: 'Active' },
];

const statusClasses: Record<string, string> = {
  active: 'bg-emerald-100 text-emerald-800',
  inactive: 'bg-red-100 text-red-800',
};

export function Users() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6 lg:mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Users</h1>
        <button className="bg-indigo-600 text-white px-4 lg:px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-indigo-700 transition-colors">
          Add User
        </button>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left px-4 lg:px-6 py-3 text-xs text-gray-500 uppercase tracking-wider border-t border-gray-200 bg-gray-50 font-medium">User</th>
                <th className="text-left px-4 lg:px-6 py-3 text-xs text-gray-500 uppercase tracking-wider border-t border-gray-200 bg-gray-50 font-medium">Email</th>
                <th className="text-left px-4 lg:px-6 py-3 text-xs text-gray-500 uppercase tracking-wider border-t border-gray-200 bg-gray-50 font-medium">Role</th>
                <th className="text-left px-4 lg:px-6 py-3 text-xs text-gray-500 uppercase tracking-wider border-t border-gray-200 bg-gray-50 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i}>
                  <td className="px-4 lg:px-6 py-3 border-t border-gray-100 text-sm text-gray-700">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{user.avatar}</span>
                      {user.name}
                    </div>
                  </td>
                  <td className="px-4 lg:px-6 py-3 border-t border-gray-100 text-sm text-gray-700">{user.email}</td>
                  <td className="px-4 lg:px-6 py-3 border-t border-gray-100 text-sm">
                    <span className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-violet-100 text-indigo-600">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 lg:px-6 py-3 border-t border-gray-100 text-sm">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusClasses[user.status.toLowerCase()]}`}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

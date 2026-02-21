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

export function Users() {
  return (
    <div className="page-users">
      <div className="page-header">
        <h1>Users</h1>
        <button className="primary-btn">Add User</button>
      </div>
      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <td className="user-cell">
                  <span className="table-avatar">{user.avatar}</span>
                  {user.name}
                </td>
                <td>{user.email}</td>
                <td><span className="role-badge">{user.role}</span></td>
                <td>
                  <span className={`status-badge status-${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

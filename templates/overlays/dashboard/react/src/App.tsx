import { Sidebar } from './components/Sidebar';
import { KPICards } from './components/KPICards';
import { DataTable } from './components/DataTable';
import { ChartPlaceholder } from './components/ChartPlaceholder';
import './App.css';

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <div className="header-actions">
            <input type="text" placeholder="Search..." className="search-input" />
            <div className="user-avatar">B</div>
          </div>
        </header>
        <KPICards />
        <div className="dashboard-grid">
          <ChartPlaceholder title="Revenue Overview" />
          <ChartPlaceholder title="User Growth" />
        </div>
        <DataTable />
      </main>
    </div>
  );
}

export default App;

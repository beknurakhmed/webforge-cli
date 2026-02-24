import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Layout from './components/Layout';
import DashboardHome from './pages/DashboardHome';
import Contacts from './pages/Contacts';
import Deals from './pages/Deals';
import Settings from './pages/Settings';

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#4f46e5' } }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashboardHome />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="deals" element={<Deals />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;

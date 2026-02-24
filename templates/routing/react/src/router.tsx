import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>
        <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Home</NavLink>
        <NavLink to="/about" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>About</NavLink>
      </nav>
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  );
}

function Home() {
  return <div><h1>Home</h1><p>Welcome to {{projectName}}</p></div>;
}

function About() {
  return <div><h1>About</h1><p>About {{projectName}}</p></div>;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

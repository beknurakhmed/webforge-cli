type RouteHandler = () => string;

interface Route {
  path: string;
  handler: RouteHandler;
}

const routes: Route[] = [];
let outlet: HTMLElement | null = null;

export function addRoute(path: string, handler: RouteHandler): void {
  routes.push({ path, handler });
}

export function navigate(path: string): void {
  window.location.hash = path;
}

export function initRouter(outletSelector: string): void {
  outlet = document.querySelector(outletSelector);

  const render = () => {
    const hash = window.location.hash.slice(1) || '/';
    const route = routes.find((r) => r.path === hash);
    if (outlet) {
      outlet.innerHTML = route ? route.handler() : '<h1>404</h1><p>Page not found</p>';
    }
  };

  window.addEventListener('hashchange', render);
  render();
}

interface Route {
  path: string;
  render: (params?: Record<string, string>) => string;
}

export function createRouter(routes: Route[], container: HTMLElement): void {
  function matchRoute(): void {
    const hash = window.location.hash.slice(1) || '/';
    for (const route of routes) {
      if (route.path.includes(':')) {
        const paramNames: string[] = [];
        const pattern = route.path.replace(/:(\w+)/g, (_, name) => {
          paramNames.push(name);
          return '([^/]+)';
        });
        const match = hash.match(new RegExp('^' + pattern + '$'));
        if (match) {
          const params: Record<string, string> = {};
          paramNames.forEach((name, i) => params[name] = match[i + 1]);
          container.innerHTML = route.render(params);
          return;
        }
      } else if (route.path === hash) {
        container.innerHTML = route.render();
        return;
      }
    }
    container.innerHTML = routes[0].render();
  }

  window.addEventListener('hashchange', matchRoute);
  matchRoute();
}

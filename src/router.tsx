import { QueryClient } from "@tanstack/react-query";
import { createRouter, createMemoryHistory, createBrowserHistory } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    history: typeof window !== "undefined" ? createBrowserHistory() : createMemoryHistory(),
  });

  return router;
};

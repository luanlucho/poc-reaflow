// React query configurations

const retry = typeof window !== "undefined" && window.Cypress ? 1 : undefined;

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: process.env.NODE_ENV === "production",
      staleTime: 15 * 1000 * 60,
      retry
    }
  }
};

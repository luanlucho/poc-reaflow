import { useQuery } from "react-query";

import { fetchAuth } from "./auth.service";

export const useFetchAuth = () => {
  return useQuery(["auth"], () => fetchAuth(), {
    enabled: true
  });
};

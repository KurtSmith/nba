import { api } from "../../app/store"

const playerApi = api.injectEndpoints({
  endpoints: (build) => ({
    player: build.query({
      query: () => 'test',
    }),
  }),
  overrideExisting: false,
})

//export const { usePlayerQuery } = playerApi;
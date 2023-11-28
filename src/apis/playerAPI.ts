import { api } from "../state/store"

export  const playerApi = api.injectEndpoints({
  endpoints: (build) => ({
    playerGet: build.query({
      query: ():any => 'players?team=1&season=2021',
    }),
  })
})

export const { usePlayerGetQuery } = playerApi;
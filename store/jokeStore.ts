import { Commit } from 'Vuex'
import AxiosService from '~/AxiosService'
import Joke from '~/types/Joke'
import State from '~/types/State'

export const state = (): State => ({
  jokes: [],
})

export const mutations = {
  SET_JOKES(state: State, jokes: Joke[]) {
    state.jokes = jokes
  },
}

export const actions = {
  async fetchAFewRandomJokes(
    { commit }: { commit: Commit },
    searchTerm: String = ''
  ) {
    const jokeRes = await AxiosService.getAFewRandomJokes(searchTerm)

    const { results } = jokeRes.data

    commit('SET_JOKES', results)
  },
}

export const getters = {
  getAllJokes(state: { jokes: Joke[] }) {
    return state.jokes
  },
}

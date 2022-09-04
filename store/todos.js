export const state = () => ({
  list: [],
});

export const mutations = {
  add(state, text) {
    console.log
    console.log(text)
    console.log(state)

    state.list.push({
      text: text,
      done: false
    })
    console.log(state)
  }
}

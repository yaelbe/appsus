export default {
  props: [],
  template: `
    <form class="add-note" @submit.prevent="addNote">
      <input ref="text" type="text" class="note-txt" placeholder="What's on your mind..." />
        <nav class="add-type">
            <button class="type-btn"><i class="fa-regular fa-comment"></i></button>
            <button class="type-btn"><i class="fa-regular fa-image"></i></button>
            <button class="type-btn"><i class="fa-brands fa-youtube"></i></button>
            <button class="type-btn"><i class="fa-solid fa-list"></i></button>
        </nav>
    </form>
`,

  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {},
  components: {},
  emits: [],
}

export default {
  props: [],
  template: `
    <form class="add-note" @submit.prevent="addNote">
      <input ref="text" type="text" v-model="info.txt"  class="note-txt" placeholder="What's on your mind..." />
        <nav class="add-type">
            <button class="type-btn" @click.prevent="txtNote"><i class="fa-regular fa-comment"></i></button>
            <button class="type-btn" @click.prevent="imgNote"><i class="fa-regular fa-image"></i></button>
            <button class="type-btn" @click.prevent="videoNode"><i class="fa-brands fa-youtube"></i></button>
            <button class="type-btn" @click.prevent="ListNode"><i class="fa-solid fa-list"></i></button>
        </nav>
    </form>
`,

  data() {
    return {
      info: {},
    }
  },
  methods: {
    txtNote() {
      this.info.type = 'TxtNote'
      this.$emit('addNote', this.info)
    },
    imgNote() {},
    videoNode() {},
    ListNode() {},
  },
  computed: {},
  created() {},
  components: {},
  emits: [],
}

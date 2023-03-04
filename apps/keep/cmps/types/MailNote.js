// "subject": "facebook",
// "body": "hi idor, Bar refali send you a new sticker open HERE",
// "isRead": false,
// "sentAt": 1677680812462,
// "removedAt": null,
// "from": "spam@facebook.com",
// "to": "user@appsus.com"

export default {
  props: ['info'],
  template: `
      <section class="note-info">
        <section class="note-info">
            <div class="title">{{info.txt}} <i class="fa-solid fa-envelope"></i></div>
            <div v-if="info.subtxt" class="subtitle">{{info.subtxt}}</div>
        </section>
      </section>
    `,

  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {},
  components: {},
  info(newVal) {
    if (!newVal) return
    this.txt = newVal.txt
    this.subtxt = newVal.subtxt
  },
  emits: [],
}

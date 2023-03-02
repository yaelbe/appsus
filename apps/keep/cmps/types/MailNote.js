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
          <p>from: {{info.from}}</p>
          <p> to: {{info.to}}</p>
          <h3>{{info.subject}}</h3>
          <p>{{info.body}}</p>כ

      </section>
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

import { mailService } from "../services/mail.service.js";

export default {
  props: [],
  template: `
  <section class="mail-details" v-if="mail">

    <div class="mail-details-card">
      <h1>From: {{mail.from}}</h1>
      <h2>Subject: {{mail.subject}}</h2>
      <p>{{mail.body}}</p>

    </div>

  </section>

  `,

  data() {
    return {
      mail: null,
    };
  },
  methods: {
    loadMail() {
      const { mailId } = this.$route.params;
      mailService.get(mailId).then((mail) => (this.mail = mail));
    },
  },
  computed: {},
  created() {
    this.loadMail();
  },
  components: {},
  emits: [],
};

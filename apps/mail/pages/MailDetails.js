import { router } from "../../../routes.js";
import { mailService } from "../services/mail.service.js";

export default {
  props: [],
  template: `
  <section class="mail-details" v-if="mail">

    <div class="mail-details-card">
      <button class="mail-details-btn" @click="backToMain" >x</button>
      <h1 class="from">From: {{mail.from}}</h1>
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
    backToMain() {
      router.push(`/mail/`);
    },
  },
  computed: {
    handleRead() {
      return (this.mail.isRead = true);
    },
  },
  created() {
    this.loadMail();
  },
  components: {},
  emits: [],
};

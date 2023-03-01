import MailList from "../cmps/MailList.js";
import { mailService } from "../services/mail.service.js";

export default {
  props: [],
  template: `

        <section class="mail-page">
            <h1>Mail Index</h1>
            <button @clicK="handleAddMail">Add Mail</button>
            <MailList :mails="mails"/>
        </section>
  `,

  data() {
    return {
      mails: null,
    };
  },
  methods: {
    handleAddMail() {
      console.log("hello");
    },
  },
  computed: {},
  created() {
    mailService.query().then((mails) => (this.mails = mails));
  },
  components: {
    MailList,
    mailService,
  },
  emits: [],
};

import MailList from "../cmps/MailList.js";
import { mailService } from "../services/mail.service.js";
import MailAdd from "./MailAdd.js";

export default {
  props: [],
  template: `
        <section class="mail-page">
          <h1>Mail Index</h1>
          <button @click="handleAddMail">Add Mail</button>
          <MailList :mails="mails"/>
        </section>
        <MailAdd class="modal" @create="createMail" v-if="isOpen"  />
  `,

  data() {
    return {
      mails: null,
      isOpen: false,
    };
  },
  methods: {
    handleAddMail() {
      this.isOpen = !this.isOpen;
    },
    createMail(mail) {
      this.handleAddMail();
      mailService
        .save(mail)
        .then(mailService.query)
        .then((mails) => (this.mails = mails));
    },
  },
  computed: {},
  created() {
    mailService.query().then((mails) => (this.mails = mails));
  },
  components: {
    MailList,
    mailService,
    MailAdd,
  },
  emits: [],
};

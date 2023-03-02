import MailList from "../cmps/MailList.js";
import { mailService } from "../services/mail.service.js";
import MailAdd from "./MailAdd.js";
import MailSideBar from "../cmps/MailSideBar.js";

export default {
  props: [],
  template: `
  <section class="mail-layout">
      <section class="navbar">
         <h1>Mail Index</h1>
         <button @click="handleAddMail">Add Mail</button>
      </section>
      <section class="mail-page">
         <MailList :mails="mails" @remove="deleteMail"/>
      </section>
      <section class="mail-sidebar">
         <MailSideBar/>
      </section>
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
    deleteMail(mailId) {
      mailService
        .remove(mailId)
        .then(mailService.query)
        .then((mails) => (this.mails = mails))
        .catch(console.log);
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
    MailSideBar,
  },
  emits: [],
};

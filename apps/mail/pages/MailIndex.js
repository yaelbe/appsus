import MailList from "../cmps/MailList.js";
import { mailService } from "../services/mail.service.js";
import MailAdd from "./MailAdd.js";
import MailSideBar from "../cmps/MailSideBar.js";
import filterBy from "../cmps/MailFilter.js";

export default {
  props: [],
  template: `
  <section class="mail-layout">
      <section class="navbar">
         <h1>Mail Index</h1>
         <button @click="handleAddMail">Add Mail</button>
         <filterBy @filter="setFilterBy"/>
      </section>
      <section class="mail-page">
         <MailList 
         :mails="filteredMails"
         v-if="mails"
          @remove="deleteMail"/>
      </section>
      <section class="mail-sidebar">
         <MailSideBar @filter="setFilterBy"/>
      </section>
  </section>
<MailAdd class="modal" @create="createMail" v-if="isOpen"  />
  `,

  data() {
    return {
      mails: null,
      isOpen: false,
      filterBy: {},
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
    setFilterBy(filterBy) {
      console.log(filterBy);
      this.filterBy = filterBy;
    },
  },
  computed: {
    filteredMails() {
      console.log(this.filterBy);
      const regex = new RegExp(this.filterBy.subject, "i");
      return this.mails.filter((mail) => regex.test(mail.subject));
    },
  },
  created() {
    mailService.query().then((mails) => (this.mails = mails));
  },
  components: {
    MailList,
    mailService,
    MailAdd,
    MailSideBar,
    filterBy,
  },
  emits: [],
};

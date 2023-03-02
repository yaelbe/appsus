import MailList from "../cmps/MailList.js";
import { mailService } from "../services/mail.service.js";
import MailAdd from "./MailAdd.js";
import MailSideBar from "../cmps/MailSideBar.js";
import filterBy from "../cmps/MailFilter.js";
import { utilService } from "../../../services/util.service.js";

export default {
  props: [],
  template: `
  <section class="mail-layout">
      <section class="navbar">
         <h1>Mail Index</h1>
         <button @click="handleAddMail">Add Mail</button>
         <!-- <filterBy @filter="setFilterBy"/> -->
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
      console.log(mail);
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
      if (filterBy === "inbox") {
        this.filterBy = {};
        this.filterBy.to = mailService.loggedinUser.email;
      }
      if (filterBy === "star") {
        this.filterBy = {};
        this.filterBy.isStar = true;
      }
      if (filterBy === "sent") {
        this.filterBy = {};
        this.filterBy.from = mailService.loggedinUser.email;
      }
    },
  },
  computed: {
    filteredMails() {
      const thisFilter = this.filterBy;
      let filterMails = this.mails;
      if (thisFilter.to) {
        filterMails = this.mails.filter((mail) => {
          if (mail.to === thisFilter.to) {
            return mail;
          }
        });
      }
      if (thisFilter.isStar) {
        filterMails = filterMails.filter((mail) => {
          console.log(mail.isStar, thisFilter.isStar);
          if (mail.isStar === thisFilter.isStar) {
            return mail;
          }
        });
      }
      if (thisFilter.from) {
        filterMails = filterMails.filter((mail) => {
          if (mail.from === thisFilter.from) {
            return mail;
          }
        });
      }
      console.log(thisFilter);
      console.log(filterMails);

      return filterMails;
    },
  },
  created() {
    mailService.query().then((mails) => (this.mails = mails));
    this.filterBy.to = mailService.loggedinUser.email;
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

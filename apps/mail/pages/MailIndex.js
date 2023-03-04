import MailList from '../cmps/MailList.js'
import { mailService } from '../services/mail.service.js'
import MailAdd from './MailAdd.js'
import MailSideBar from '../cmps/MailSideBar.js'
import filterBy from '../cmps/MailFilter.js'
import { utilService } from '../../../services/util.service.js'

export default {
  props: [],
  template: `
  <section class="mail-layout">
      <section class="navbar">
         <h1>Mail Index</h1>
         <button @click="handleAddMail">compose</button>
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
    }
  },
  methods: {
    onload() {
      mailService.query().then((mails) => (this.mails = mails))
      this.filterBy.to = mailService.loggedinUser.email
    },
    handleAddMail() {
      this.isOpen = !this.isOpen
    },
    createMail(mail) {
      console.log(mail)
      this.handleAddMail()
      mailService
        .save(mail)
        .then(mailService.query)
        .then((mails) => (this.mails = mails))
    },
    deleteMail(mail) {
      if (mail.removedAt) {
        return mailService
          .remove(mail.id)
          .then(mailService.query)
          .then((mails) => (this.mails = mails))
      }
      mail.removedAt = Date.now()
      mailService.update(mail)
    },
    setFilterBy(filterBy) {
      console.log(filterBy)
      if (filterBy === 'inbox') {
        this.filterBy = {}
        this.filterBy.to = mailService.loggedinUser.email
      }
      if (filterBy === 'star') {
        this.filterBy = {}
        this.filterBy.isStar = true
      }
      if (filterBy === 'sent') {
        this.filterBy = {}
        this.filterBy.from = mailService.loggedinUser.email
      }
      if (filterBy === 'draft') {
        this.filterBy = {}
        this.filterBy.sentAt = true
      }
      if (filterBy === 'trash') {
        this.filterBy = {}
        this.filterBy.removedAt = true
      }
    },
  },
  computed: {
    filteredMails() {
      const thisFilter = this.filterBy
      let filterMails = this.mails
      if (thisFilter.to) {
        filterMails = this.mails.filter((mail) => {
          if (mail.to === thisFilter.to && !mail.removedAt) {
            return mail
          }
        })
      }
      if (thisFilter.isStar) {
        filterMails = filterMails.filter((mail) => {
          console.log(mail.isStar, thisFilter.isStar)
          if (mail.isStar === thisFilter.isStar) {
            return mail
          }
        })
      }
      if (thisFilter.from) {
        filterMails = filterMails.filter((mail) => {
          if (mail.from === thisFilter.from && mail.sentAt) {
            return mail
          }
        })
      }
      if (thisFilter.sentAt) {
        filterMails = filterMails.filter((mail) => {
          if (!mail.sentAt) {
            return mail
          }
        })
      }
      if (thisFilter.removedAt) {
        filterMails = filterMails.filter((mail) => {
          if (mail.removedAt) {
            return mail
          }
        })
      }
      return filterMails
    },
  },
  created() {
    console.log('route', this.$route.query.noteJson)
    this.onload()
  },

  components: {
    MailList,
    mailService,
    MailAdd,
    MailSideBar,
    filterBy,
  },
  emits: [],
}

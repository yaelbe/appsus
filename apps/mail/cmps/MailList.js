import { router } from "../../../routes.js";
import { mailService } from "../services/mail.service.js";
import MailPreview from "./MailPreview.js";

export default {
  props: ["mails"],
  template: `
  <ul class="main-list">
     <li @click="handleDetails(mail)" v-for="mail in mails" :key="mail.id" class="mail-list">
       <MailPreview :mail="mail" @remove="remove"/>
     </li>  
  </ul>
  `,

  data() {
    return {};
  },
  methods: {
    handleDetails(mail) {
      if (!mail) return;
      mail.isRead = true;
      mailService.update(mail);
      router.push(`/mail/${mail.id}`);
    },
    remove(mail) {
      this.$emit("remove", mail);
    },
  },
  computed: {},
  created() {},
  components: {
    MailPreview,
  },
  emits: ["remove"],
};

import { svgService } from "../../../services/svg.service.js";
import { utilService } from "../../../services/util.service.js";

export default {
  props: ["mail"],
  template: `

        <article class="mail-preview" :class="handleOpen">
            <div v-html="getSvg('star')"></div>
            <h3>{{mail.subject}}</h3>
            <p>{{mail.body}}</p>
            <p><span class="preview-time">{{handleTime}}</span></p>
        </article>
        <section class ="options-mail">
            <button class="option-mail-btn" @click.stop="remove" title="Delete" v-html="getSvg('trashFill')"></button>
            <button class="option-mail-btn" @click.stop="toggleRead" title="mark as read" v-html="getSvg('sent')"></button>
            <button class="option-mail-btn" @click.stop="share" title="make to note" v-html="getSvg('share')"></button>
        </section>
    `,
  created() {},
  methods: {
    getSvg(iconName) {
      return svgService.getMailSvg(iconName);
    },
    remove() {
      this.$emit("remove", this.mail.id);
    },
    toggleRead() {
      this.mail.isRead = !this.mail.isRead;
      this.$emit("toggle", JSON.parse(JSON.stringify(this.mail)));
    },
    share() {
      console.log(hello);
    },
  },
  computed: {
    handleTime() {
      return utilService.formatTime(this.mail.sentAt);
    },
    handleOpen() {
      if (!this.mail.isRead) return "openEmail";
      return "";
    },
  },
  mounted() {},
  components: {},
  emits: ["remove", "toggle"],
};

import { svgService } from "../../../services/svg.service.js";

export default {
  props: ["mail"],
  template: `
        <article class="mail-preview">
            <div v-html="getSvg(handleStar)"></div>
            <h3>{{mail.subject}}</h3>
            <p>{{mail.body}}</p>
            <p><span class="preview-time">{{handleTime}}</span></p>
        </article>
    `,
  created() {},
  methods: {
    getSvg(iconName) {
      return svgService.getMailSvg(iconName);
    },
  },
  computed: {
    handleTime() {
      let time = this.mail.sentAt;
      const day = 1000 * 60 * 60 * 24; //day by milSecond

      if (Date.now() - time < day) {
        let date = new Date(time);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        let formattedTime = hours + ":" + minutes.substr(-2);

        return formattedTime;
      }
      let date = new Date(time);
      let month = date.getMonth();
      let year = "0" + date.getFullYear();
      year = year.slice(0, 2);
      if (month < 10) month = "0" + month;
      let formattedTime = month + "/" + year.substr(-2);
      return formattedTime;
    },
    handleStar() {
      if (this.mail.isRead) {
        return "starFill";
      }
      return "star";
    },
  },
  mounted() {},
  components: {
    svgService,
  },
};

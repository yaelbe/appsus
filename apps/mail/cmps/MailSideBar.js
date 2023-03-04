import { svgService } from "../../../services/svg.service.js";

export default {
  props: [],
  template: `
  <section class="main-sidebar">
    <ul class="mail-sidebar">
      <li @click="handleFilter('inbox')" class="sidebar-li"><span v-html="getSvg('allInbox')"></span>Inbox</li>
      <li @click="handleFilter('star')" class="sidebar-li"><span v-html="getSvg('starFill2')"></span>Stared</li>
      <li @click="handleFilter('sent')" class="sidebar-li"><span v-html="getSvg('sent2')"></span>Sent</li>
      <li @click="handleFilter('draft')" class="sidebar-li"><span v-html="getSvg('draft')"></span>Draft</li>
      <li @click="handleFilter('trash')" class="sidebar-li"><span v-html="getSvg('trash')"></span>Trash</li>
    </ul>
  </section>
  `,

  data() {
    return {};
  },
  methods: {
    getSvg(iconName) {
      return svgService.getMailSvg(iconName);
    },
    handleFilter(key) {
      this.$emit("filter", `${key}`);
    },
  },
  computed: {},
  created() {},
  components: {},
  emits: ["filter"],
};

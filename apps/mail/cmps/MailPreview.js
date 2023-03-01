export default {
  props: ["mail"],
  template: `
        <article class="mail-preview">
            <h3>{{mail.subject}}</h3>
        </article>
    `,
  created() {},
};

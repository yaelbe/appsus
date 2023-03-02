export default {
  inheritAttrs: false,
  props: ['info'],
  template: `
  <div class="modal-overlay"  @click="toggleModal"></div>
    <section class="centerModal big">
        <form class="details">
            <input type="text" name="tx"  v-model="editInfo.txt">
            <div  contentEditable="true">SubText</div>
            <!-- <textarea v-model="editInfo.subtxt" class="subtxt">{{editInfo.subtxt}}</textarea> -->
            <img v-if="info.imgUrl" :src="info.imgUrl">
        </form>
        <section class="options show">
            <button class="options-btn" @click.stop="duplicate" title="Make a copy"><i class="fa-solid fa-copy"></i></button>
            <button class="options-btn" @click.stop="remove" title="Delete"><i class="fa-solid fa-trash"></i></button>
            <button class="options-btn" @click.stop="openColorPicker($event)" title="Change color"><i class="fa-solid fa-palette"></i></button>
            <button class="options-btn" @click.stop="pin" title="Pin"><i class="fa-solid fa-thumbtack"></i></button>
        </section>
    </section>
  `,

  data() {
    return {
      editInfo: this.info,
    }
  },
  methods: {
    duplicate() {},
    remove() {},
    openColorPicker(ev) {},
    pin() {},
    toggleModal() {
      this.$emit('cancel')
    },
  },
  computed: {},
  created() {},
  components: {},
  emits: [],
}

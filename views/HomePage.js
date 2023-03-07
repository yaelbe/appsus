export default {
  template: `
<section class="home-page" >

    <div class="container-font">
        <h1>
            <i></i>
            <span id="a">I </span>
            <span id="b">Am</span>
            <span id="c">Dead</span>
        </h1>
    </div>
    <img class="logo" src="../assets/img/logo.png" alt="">
    <section class="btns">
        <button class="home-btn" @click="navigate('mail')">Check Your Mails</button>
        <button class="home-btn" @click="navigate('keep')" >Check Your Notes</button>
    </section>
</section>

    `,
  methods: {
    navigate(to) {
      this.$router.push(`/${to}`)
    },
  },
}

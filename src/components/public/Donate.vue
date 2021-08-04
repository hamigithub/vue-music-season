<template>
  <div id="donate">
    <div class="container">
      <div class="row padding-top20">
        <div class="col-xs-12">
          <div class="text-center">
            <h2>{{ $t("appPublic.row2") }}</h2>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="msbox">
            <p style="text-align:center">
              Support Conero Music Festival! <br>
              Your donation helps concerts and events happen. <br><br>
            </p>
            <div style="text-align: center">
              <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="H59NZWFCFMQ92" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
              <div class="padding-top20">
                <img width="200" height="200" src="../../assets/img/DonateQR.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "donate",
  methods: {
    testB() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
.titleBtn {
  background-image: linear-gradient(90deg, #ff5a17, #ff1a62);
}

.msbox {
  margin: 50px 10%;
  padding: 20px;
  background: #eeeeee;
}
</style>

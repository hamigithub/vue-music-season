<template>
  <div id="submitted">
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
            <h1>{{ $t("applyMsg.submitted1") }}</h1>
            <p class="padding-top20">{{ $t("applyMsg.submitted2") }}</p>
            <div
              class="pointer-hand font-blue font-24 font-bold padding-top20"
              @click="testB"
            >
              {{ $t("applyMsg.submitted3") }}
            </div>
            <div class="padding-top20">
              <img src="../../assets/img/logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Submitted",
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

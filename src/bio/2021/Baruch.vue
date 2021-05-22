<template>
  <div id="baruch">
    <div class="container">
      <div class="row bioMain">
        <div class="col-md-3 col-xs-12 text-center">
          <div class="bioImg">
            <img src="../../assets/img/Baruch.jpg" alt />
          </div>
        </div>
        <div class="col-md-8 col-xs-12">
          <h3 class="padding-10">{{ $t("committee2021.baruch.info.row1") }}</h3>
          <p class="text-gray padding-top15">
            {{ $t("committee2021.baruch.info.row2") }}
          </p>
          <p class="text-gray padding-top15">
            {{ $t("committee2021.baruch.info.row3") }}
          </p>
          <p class="text-gray padding-top15">
            {{ $t("committee2021.baruch.info.row4") }}
          </p>
          <p class="text-gray padding-top15">
            {{ $t("committee2021.baruch.info.row5") }}
          </p>
          <p class="text-gray padding-top15">
            {{ $t("committee2021.baruch.info.row6") }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <router-link to="/faculty#bioBaruch">
            <div class="bioClick">{{ $t("appPublic.row3") }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Baruch",
};
</script>

<style scoped>
</style>

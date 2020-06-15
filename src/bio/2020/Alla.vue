<template>
  <div id="alla">
    <div class="container">
      <div class="row bioMain">
        <div class="col-md-3 col-xs-12 text-center">
          <div class="bioImg">
            <img src="../../assets/img/Alla.jpg" alt />
          </div>
        </div>
        <div class="col-md-8 col-xs-12">
          <h3 class="padding-10">{{$t('allaInfo.row1')}}</h3>
          <p class="text-gray padding-top15">{{$t('allaInfo.row2')}}</p>
          <p class="text-gray padding-top15">{{$t('allaInfo.row3')}}</p>
          <p class="text-gray padding-top15">{{$t('allaInfo.row4')}}</p>
          <p class="text-gray padding-top15">{{$t('allaInfo.row5')}}</p>
          <p class="text-gray padding-top15">{{$t('allaInfo.row6')}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <router-link to="/faculty#bioAlla">
            <div class="bioClick">{{$t('appPublic.row3')}}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alla"
};
</script>

<style scoped>
</style>

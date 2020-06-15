<template>
  <div id="lorenzo">
    <div class="container">
      <div class="row bioMain">
        <div class="col-md-3 col-xs-12 text-center">
          <div class="bioImg">
            <img src="../assets/img/Lorenzo.jpg" alt />
          </div>
        </div>
        <div class="col-md-8 col-xs-12">
          <h3 class="padding-10">{{$t('lorenzoInfo.row1')}}</h3>
          <h5>{{$t('lorenzoInfo.row2')}}</h5>
          <p class="text-gray padding-top15">{{$t('lorenzoInfo.row3')}}</p>
          <p class="text-gray padding-top15">{{$t('lorenzoInfo.row4')}}</p>
          <p class="text-gray padding-top15">{{$t('lorenzoInfo.row5')}}</p>
          <p class="text-gray padding-top15">{{$t('lorenzoInfo.row6')}}</p>
          <div class="padding-top20">
            <a href="http://www.lorenzodibella.com" target="_blank">www.lorenzodibella.com</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <router-link to="/faculty#bioLorenzo">
            <div class="bioClick">{{$t('appPublic.row3')}}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Andrea"
};
</script>

<style scoped>
</style>

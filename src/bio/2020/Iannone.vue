<template>
  <div id="iannone">
    <div class="container">
      <div class="row bioMain">
        <div class="col-md-3 col-xs-12 text-center">
          <div class="bioImg">
            <img src="../../assets/img/Iannone.jpg" alt />
          </div>
        </div>
        <div class="col-md-8 col-xs-12">
          <h3 class="padding-10">{{$t('iannoneInfo.title')}}</h3>
          <p class="text-gray padding-top15">{{$t('iannoneInfo.row1')}}</p>
          <p class="text-gray padding-top15">{{$t('iannoneInfo.row2')}}</p>
          <p class="text-gray padding-top15">{{$t('iannoneInfo.row3')}}</p>
          <p class="text-gray padding-top15">{{$t('iannoneInfo.row4')}}</p>
          <p class="text-gray padding-top15">{{$t('iannoneInfo.row5')}}</p>
          <p class="text-gray padding-top15">{{$t('iannoneInfo.row6')}}</p>
          <p class="text-gray padding-top15">{{$t('iannoneInfo.row7')}}</p>
          <p class="text-gray padding-top15">{{$t('iannoneInfo.row8')}}</p>
          <p class="text-gray padding-top15">{{$t('iannoneInfo.row9')}}</p>
          <p class="text-gray padding-top15">{{$t('iannoneInfo.row10')}}</p>
          <p class="text-gray padding-top15">{{$t('iannoneInfo.row11')}}</p>
          <p class="text-gray padding-top15">{{$t('iannoneInfo.row12')}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <router-link to="/faculty#bioIannone">
            <div class="bioClick">{{$t('appPublic.row3')}}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Iannone"
};
</script>

<style scoped>
</style>

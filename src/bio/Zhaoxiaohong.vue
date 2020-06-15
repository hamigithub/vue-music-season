<template>
  <div id="zhaoxiaohong">
    <div class="container">
      <div class="row bioMain">
        <div class="col-md-3 col-xs-12 text-center">
          <div class="bioImg">
            <img src="../assets/img/Zhaoxiaohong.jpg" alt="">
          </div>
        </div>
        <div class="col-md-8 col-xs-12">
          <h3 class="padding-10">{{$t('zhaoxiaohongInfo.title')}}</h3>
          <p class="text-gray padding-top15">{{$t('zhaoxiaohongInfo.row1')}}</p>
          <p class="text-gray padding-top15">{{$t('zhaoxiaohongInfo.row2')}}</p>
          <p class="text-gray padding-top15">{{$t('zhaoxiaohongInfo.row3')}}</p>
          <p class="text-gray padding-top15">{{$t('zhaoxiaohongInfo.row4')}}</p>
          <p class="text-gray padding-top15">{{$t('zhaoxiaohongInfo.row5')}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <router-link to="/faculty#bioZhaoxiaohong">
            <div class="bioClick">
              {{$t('appPublic.row3')}}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Zhaoxiaohong"
  }
</script>

<style scoped>

</style>

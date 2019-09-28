<template>
  <div id="cong">
    <div class="container">
      <div class="row bioMain">
        <div class="col-md-3 col-xs-12 text-center">
          <div class="bioImg">
            <img src="../assets/img/Cong.jpg" alt="">
          </div>
        </div>
        <div class="col-md-8 col-xs-12">
          <h3 class="padding-10">{{$t('congInfo.title')}}</h3>
          <p class="text-gray padding-top15">{{$t('congInfo.row1')}}</p>
          <p class="text-gray padding-top15">{{$t('congInfo.row2')}}</p>
          <p class="text-gray padding-top15">{{$t('congInfo.row3')}}</p>
          <p class="text-gray padding-top15">{{$t('congInfo.row4')}}</p>
          <p class="text-gray padding-top15">{{$t('congInfo.row5')}}</p>
          <p class="text-gray padding-top15">{{$t('congInfo.row6')}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <router-link to="/faculty#bioCong">
            <div class="bioClick">
              < {{$t('appPublic.row3')}}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Cong"
  }
</script>

<style scoped>

</style>

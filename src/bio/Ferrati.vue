<template>
  <div id="ferrati">
    <div class="container">
      <div class="row bioMain">
        <div class="col-md-3 col-xs-12 text-center">
          <div class="bioImg">
            <img src="../assets/img/Ferrati.jpg" alt="">
          </div>
        </div>
        <div class="col-md-8 col-xs-12">
          <h3 class="padding-10">{{$t('ferratiInfo.title')}}</h3>
          <p class="text-gray padding-top15">{{$t('ferratiInfo.row1')}}</p>
          <p class="text-gray padding-top15">{{$t('ferratiInfo.row2')}}</p>
          <p class="text-gray padding-top15">{{$t('ferratiInfo.row3')}}</p>
          <p class="text-gray padding-top15">{{$t('ferratiInfo.row4')}}</p>
          <p class="text-gray padding-top15">{{$t('ferratiInfo.row5')}}</p>
          <p class="text-gray padding-top15">{{$t('ferratiInfo.row6')}}</p>
          <p class="text-gray padding-top15">{{$t('ferratiInfo.row7')}}</p>
          <p class="text-gray padding-top15">{{$t('ferratiInfo.row8')}}</p>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <router-link to="/faculty#bioFerrati">
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
    name: "Ferrati"
  }
</script>

<style scoped>

</style>

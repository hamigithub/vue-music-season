<template>
  <div id="tamara">
    <div class="container">
      <div class="row bioMain">
        <div class="col-md-3 col-xs-12 text-center">
          <div class="bioImg">
            <img src="../assets/img/Tamara.jpg" alt="">
          </div>
        </div>
        <div class="col-md-8 col-xs-12">
          <h3 class="padding-10">{{$t('tamaraInfo.title')}}</h3>
          <p class="text-gray padding-top15">{{$t('tamaraInfo.row1')}}</p>
          <p class="text-gray padding-top15">{{$t('tamaraInfo.row2')}}</p>
          <p class="text-gray padding-top15">{{$t('tamaraInfo.row3')}}</p>
          <p class="text-gray padding-top15">{{$t('tamaraInfo.row4')}}</p>
          <p class="text-gray padding-top15">{{$t('tamaraInfo.row5')}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <router-link to="/faculty#bioTamara">
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
    name: "Tamara"
  }
</script>

<style scoped>

</style>

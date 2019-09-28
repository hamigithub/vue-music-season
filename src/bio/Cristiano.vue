<template>
  <div id="cristiano">
    <div class="container">
      <div class="row bioMain">
        <div class="col-md-3 col-xs-12 text-center">
          <div class="bioImg">
            <img src="../assets/img/Cristiano.jpg" alt="">
          </div>
        </div>
        <div class="col-md-8 col-xs-12">
          <h3 class="padding-10">{{$t('cristianoInfo.title')}}</h3>
          <p class="text-gray padding-top15">{{$t('cristianoInfo.row1')}}</p>
          <p class="text-gray padding-top15">{{$t('cristianoInfo.row2')}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <router-link to="/faculty#bioCristiano">
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
    name: "Cristiano"
  }
</script>

<style scoped>

</style>

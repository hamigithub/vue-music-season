<template>
  <div id="mark">
    <div class="container">
      <div class="row bioMain">
        <div class="col-md-3 col-xs-12 text-center">
          <div class="bioImg">
            <img src="../assets/img/Mark.jpg" alt="">
          </div>
        </div>
        <div class="col-md-8 col-xs-12">
          <h3 class="padding-10"></h3>
          <p class="text-gray padding-top15"></p>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <router-link to="/faculty#bioMark">
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
    name: "Mark"
  }
</script>

<style scoped>

</style>

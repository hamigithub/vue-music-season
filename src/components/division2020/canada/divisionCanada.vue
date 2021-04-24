<template>
  <div id="divisionCanada">
    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="text-center">
            <h1>{{ $t("divisionAustralia.row1") }}</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="textWrap">
            <h1>Coming Soon!</h1>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <input
            @change="fileChange($event)"
            type="file"
            id="upload_file"
            multiple
            style="display: none"
          />
          <div class="add" @click="chooseType">
            <div class="add-image" align="center">
              <svg
                t="1618966527346"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1917"
                width="200"
                height="200"
              >
                <path
                  d="M864 248H728l-32.4-90.8C691 144.5 679 136 665.4 136H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80z m8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456z"
                  fill=""
                  p-id="1918"
                ></path>
                <path
                  d="M512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160z m0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"
                  fill=""
                  p-id="1919"
                ></path>
              </svg>
              <p class="font13">添加图片</p>
            </div>
          </div>
          <div class="add-img" v-show="imgList.length">
            <p class="font14">
              图片(最多6张，还可上传<span v-text="6 - imgList.length"></span>张)
            </p>
            <ul class="img-list">
              <li v-for="(url, index) in imgList" :key="index">
                <img
                  class="del"
                  src="../../../assets/img/wcPay.jpg"
                  @click.stop="delImg(index)"
                />
                <img :src="url.file.src" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "DivisionCanada",
  data() {
    return {
      showFace: false,
      imgList: [],
      size: 0,
      limit: 6, //限制图片上传的数量
      tempImgs: [],
    };
  },
  methods: {
    chooseType() {
      document.getElementById("upload_file").click();
    },
    fileChange(el) {
      if (!el.target.files[0].size) return;
      this.fileList(el.target);
      el.target.value = "";
    },
    fileList(fileList) {
      let files = fileList.files;
      for (let i = 0; i < files.length; i++) {
        //判断是否为文件夹
        if (files[i].type != "") {
          this.fileAdd(files[i]);
        } else {
          //文件夹处理
          this.folders(fileList.items[i]);
        }
      }
    },
    //文件夹处理
    folders(files) {
      let _this = this;
      //判断是否为原生file
      if (files.kind) {
        files = files.webkitGetAsEntry();
      }
      files.createReader().readEntries(function (file) {
        for (let i = 0; i < file.length; i++) {
          if (file[i].isFile) {
            _this.foldersAdd(file[i]);
          } else {
            _this.folders(file[i]);
          }
        }
      });
    },
    foldersAdd(entry) {
      let _this = this;
      entry.file(function (file) {
        _this.fileAdd(file);
      });
    },
    fileAdd(file) {
      if (this.limit !== undefined) this.limit--;
      if (this.limit !== undefined && this.limit < 0) return;
      //总大小
      this.size = this.size + file.size;
      //判断是否为图片文件
      if (file.type.indexOf("image") == -1) {
        this.$dialog.toast({ mes: "请选择图片文件" });
      } else {
        let reader = new FileReader();
        let image = new Image();
        let _this = this;
        reader.readAsDataURL(file);
        reader.onload = function () {
          file.src = this.result;
          image.onload = function () {
            let width = image.width;
            let height = image.height;
            file.width = width;
            file.height = height;
            _this.imgList.push({
              file,
            });
            console.log(_this.imgList);
          };
          image.src = file.src;
        };
      }
    },
    delImg(index) {
      this.size = this.size - this.imgList[index].file.size; //总大小
      this.imgList.splice(index, 1);
      if (this.limit !== undefined) this.limit = 6 - this.imgList.length;
    },
    displayImg() {},
  },
};
</script>

<style scoped>
.app-bg >>> img {
  width: 100%;
  height: 100%;
  -webkit-transform: scale(1.03);
  -moz-transform: scale(1.03);
  -ms-transform: scale(1.03);
  -o-transform: scale(1.03);
  transform: scale(1.03);
}
textarea {
  padding: 10px;
}
.text-length {
  font-size: 14px;
  z-index: 999;
  width: 100%;
  text-align: right;
  margin-bottom: 10px;
  color: #e4e4e4;
}
.warning {
  color: #fe9900;
}
.add-img {
  width: 100%;
  padding: 10px;
}
.add-img p {
  color: #999;
}
.mui-content {
  padding-bottom: 60px;
}
.mui-content .idea {
  margin-top: 8px;
  background-color: #ffffff;
}
.good-item {
  text-align: center;
  width: 33%;
  max-width: 100%;
  overflow: hidden;
  padding-right: 10px;
  padding-bottom: 10px;
  float: left;
}
.good-item span {
  font-size: 15px;
  height: 30px;
  line-height: 30px;
  border-radius: 50px;
  display: block;
  width: 100%;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border: 1px solid #cccccc;
}
.mui-table {
  padding-top: 10px;
  color: #333;
  padding-left: calc(0.5% + 10px);
}
.h-line-behind {
  line-height: 40px;
  padding-left: 10px;
}
.question {
  border: 0;
  margin-bottom: 10px;
}
.add {
  display: inline-block;
  margin-bottom: 20px;
}
.add-image {
  padding-top: 15px;
  margin-left: 10px;
  width: 80px;
  top: 20px;
  height: 80px;
  border: 1px dashed rgba(0, 0, 0, 0.2);
}
.add-image .icon-camera {
  font-size: 24px;
}
.good-item .choose {
  color: #fff;
  background-color: #87582e;
  color: #fff;
  border: 0;
}
.mui-btn-block {
  border: 0;
  border-radius: 0;
  background-color: #87582e;
  color: #fff;
  margin-bottom: 0;
  bottom: 0;
}
.mui-buttom {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 999;
}
/*九宫格*/
.img-list {
  overflow: hidden;
}
.img-list > li {
  float: left;
  width: 32%;
  text-align: center;
  padding-top: 31%;
  margin-left: 1%;
  margin-top: 1%;
  position: relative;
}
.img-list > li > div {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.img-list > li > div .app-bg {
  width: 100%;
  height: 100%;
}
.mui-fullscreen {
  z-index: 9999;
}
.del {
  position: absolute;
  width: 18px;
  top: 0;
  right: 0;
  z-index: 999;
}
</style>

<template>
  <el-upload
    class="avatar-uploader"
    :action="''"
    :http-request="uploadToFilesbaseStorage"
    :show-file-list="false"
    :before-upload="beforeAvatarUpload">

    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>

    <!-- ファイルの容量が大きすぎます -->
    <v-dialog v-model="isOverFileSize" width="500">
      <v-card color="error" dark>
        <v-card-text>
          サイズは2MB以下しか受け付けません
        </v-card-text>

        <v-card-actions>
          <v-spacer/>
          <v-btn @click="understand()" color="red lighten-2">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 許可されていないファイル形式です -->
    <v-dialog v-model="isNotAllowFileType" width="500">
      <v-card color="error" dark>
        <v-card-text>
          JPEG又はPNG形式しか受け付けません
        </v-card-text>

        <v-card-actions>
          <v-spacer/>
          <v-btn @click="understand()" color="red lighten-2">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <template v-if="!hideStatus">
      <v-snackbar
        :value="isSending"
        :timeout="3000"
        top>
        画像をアップロード中
      </v-snackbar>

      <v-snackbar
        @input="toStandby()"
        :value="isSuccess"
        :timeout="3000"
        color="success"
        top>
        画像のアップロードに成功しました
      </v-snackbar>

      <v-snackbar
        @input="toStandby()"
        :value="isError"
        :timeout="3000"
        color="error"
        top>
        画像のアップロードに失敗しました
      </v-snackbar>
    </template>
  </el-upload>
</template>

<script lang="ts">
import { storage } from '@/firebase/index'
import Logger from '@/serviceLocator/Logger'
import authSelector from '@/store/middleware/auth/selector'
import uuid from 'uuid/v4'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

type RequestType = { file: File }

enum UploadState {
  STANDBY,
  SENDING,
  SUCCESS,
  ERROR,
}

@Component({
  model: {
    event: 'change',
    prop: 'url',
  },
})
export default class UserImageUploader extends Vue {
  @Prop() public url!: string
  @Prop({default: false}) public hideStatus!: boolean

  public imageUrl = ''
  public isNotAllowFileType = false
  public isOverFileSize = false

  public uploadState: UploadState = UploadState.STANDBY

  get isSending() {
    return this.uploadState === UploadState.SENDING
  }

  get isSuccess() {
    return this.uploadState === UploadState.SUCCESS
  }

  get isError() {
    return this.uploadState === UploadState.ERROR
  }

  public toStandby() {
    this.uploadState = UploadState.STANDBY
  }

  @Watch('url', { immediate: true })
  public setUrl() {
    this.imageUrl = this.url
  }

  public async uploadToFilesbaseStorage(request: RequestType) {
    const user = authSelector.user(this.$store.state)
    if (user === undefined) {
      return
    }

    try {
      this.uploadState = UploadState.SENDING
      const filename = uuid()
      const imageRef = storage().ref().child(`/users/${user.id}/images/${filename}`)
      await imageRef.put(request.file)
      this.imageUrl = await imageRef.getDownloadURL()
      this.$emit('change', this.imageUrl)
      this.uploadState = UploadState.SUCCESS
    } catch (e) {
      Logger.getInstance().error(e)
      this.uploadState = UploadState.ERROR
    }
  }

  public beforeAvatarUpload(file: File) {
    const isJPG = file.type === 'image/jpeg'
    const isPNG = file.type === 'image/png'

    const isLt2M = file.size / 1024 / 1024 < 2
    const isAllowFileType = isJPG || isPNG

    if (!isAllowFileType) {
      this.isNotAllowFileType = true
      return false
    }
    if (!isLt2M) {
      this.isOverFileSize = true
      return false
    }
    return true
  }

  public understand() {
    this.isNotAllowFileType = false
    this.isOverFileSize = false
  }
}
</script>

<style lang="scss" scoped>
.avatar-uploader {
  /deep/ .el-upload {
    min-width: 100%;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &:hover {
      border-color: #409EFF;
    }
  }
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

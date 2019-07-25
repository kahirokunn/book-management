<template>
  <v-card class="elevation-12" dark>
    <v-app-bar flat dark>
      <v-btn icon dark @click="cancel()">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>Registration Book</v-toolbar-title>
    </v-app-bar>

    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-layout row wrap>
          <v-flex xs12 md2>
            <p>本の表紙</p>
            <ImageUploader v-model="coverImageFilePath" />
          </v-flex>
        </v-layout>

        <SpaceStick />

        <v-layout row wrap>
          <v-flex xs12 md2>
            <p>領収書</p>
            <ImageUploader v-model="receiptImageFilePath" />
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12 md6>
            <v-text-field
              v-model="title"
              :rules="titleRules"
              prepend-icon="subject"
              label="タイトル"
              type="text"
            />
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12 md1>
            <v-text-field
              v-model.number="price"
              :rules="priceRules"
              prepend-icon="attach_money"
              label="価格"
              type="text"
            />
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs8 md4>
            <v-flex xs4>
              <p>所有者</p>
              <v-btn-toggle color="primary" v-model="owner">
                <template v-for="owner in ownerList">
                  <v-btn text :value="owner" :key="owner">{{ owner | ownerFilter }}</v-btn>
                </template>
              </v-btn-toggle>
            </v-flex>
          </v-flex>
        </v-layout>

        <SpaceStick />

        <v-layout row wrap>
          <v-flex xs8 md4>
            <v-flex xs4>
              <p>購入場所</p>
              <v-btn-toggle color="primary" v-model="purchasedLocation">
                <template v-for="location in purchasedLocationList">
                  <v-btn text :value="location" :key="location">{{ location }}</v-btn>
                </template>
              </v-btn-toggle>
            </v-flex>
          </v-flex>
        </v-layout>

        <SpaceStick />

        <v-layout row wrap>
          <v-flex xs8 md4>
            <v-flex xs4>
              <p>種類</p>
              <v-btn-toggle color="primary" v-model="type">
                <template v-for="bookType in bookTypeList">
                  <v-btn text :value="bookType" :key="bookType">{{ bookType | bookTypeFilter }}</v-btn>
                </template>
              </v-btn-toggle>
            </v-flex>
          </v-flex>
        </v-layout>

        <SpaceStick />

        <v-flex :class="$style.group">
          <p>購入日時</p>
          <v-layout row wrap>
            <v-flex xs2 md1>
              <v-select v-model="purchasedYear" :items="years" solo />
            </v-flex>
            <v-flex xs2 md1>
              <v-select v-model="purchasedMonth" :items="months" solo />
            </v-flex>
            <v-flex xs2 md1>
              <v-select v-model="purchasedDay" :items="days" solo />
            </v-flex>
          </v-layout>
        </v-flex>

        <v-layout row wrap fill-height class="editor-wrapper flex-grow">
          <v-flex xs12 sm5 class="a-flex flex-grow-deep">
            <v-textarea
              class="flex-grow"
              v-model="description"
              outline
              no-resize
              :rows="rows"
              label="説明文"
              color="primary"
            />
          </v-flex>

          <SpaceStick width="12" />

          <v-flex hidden-xs-only md6 class="a-flex flex-grow">
            <Markdown :source="description || 'プレビュー'" />
          </v-flex>
        </v-layout>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn :disabled="!valid" @click="submit()" color="secondary">登録</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { BookType, Evaluation, Owner, PurchasedLocation } from '@/boundary/bookApplicationService/InOutType'
import { IRegistrationParams } from '@/boundary/bookApplicationService/InOutType'
import { IUser } from '@/boundary/userApplicationService/InOutType'
import SpaceStick from '@/components/atoms/spaceStick.vue'
import Markdown from '@/components/molecules/markdown/markdown'
import ImageUploader from '@/components/relay/imageUploader.vue'
import { days, months, years } from '@/config/user/birthday'
import * as rules from '@/config/user/rules'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  filters: {
    bookTypeFilter(bookType: BookType) {
      if (bookType === BookType.PHYSICAL_BOOK) {
        return '物理本'
      }
      return '電子本'
    },
    ownerFilter(owner: Owner) {
      switch (owner) {
        case Owner.SELF:
          return '自分'
        case Owner.COMPANY:
          return '会社'
        case Owner.OTHER:
          return 'その他'
      }
    },
  },
  components: {
    ImageUploader,
    Markdown,
    SpaceStick,
  },
})
export default class CreateBookForm extends Vue {
  public $refs!: {
    form: VForm,
  }

  @Prop({ required: true })
  public createBook!: (params: IRegistrationParams) => void

  @Prop({ required: true })
  public user!: IUser

  public valid = true

  public title = ''
  public purchasedLocation = PurchasedLocation.ONLINE
  public description = ''
  public type = BookType.PHYSICAL_BOOK
  public price = 0
  public owner = Owner.COMPANY
  public purchasedUrl = ''
  public downloadUrl = ''
  public coverImageFilePath: string | null = null
  public evaluation: Evaluation | null = null
  public receiptImageFilePath: string | null = null

  public purchasedYear = new Date().getFullYear()
  public purchasedMonth = new Date().getMonth() + 1
  public purchasedDay = new Date().getDate()

  get rows() {
    const rows = this.description.split('\n').length
    if (rows < 10) {
      return 10
    }
    return rows
  }
  get titleRules() {
    return rules.requiredRules('Title is required')
  }

  get priceRules() {
    return [
      ...rules.requiredRules('Price is required'),
      ...rules.numberRules,
    ]
  }
  get urlRules() { return rules.urlRules }
  get years() { return years }
  get months() { return months }
  get days() { return days }
  get purchasedLocationList() {
    return [
      PurchasedLocation.ONLINE,
      PurchasedLocation.OFFLINE,
    ]
  }
  get bookTypeList() {
    return [
      BookType.PHYSICAL_BOOK,
      BookType.E_BOOK,
    ]
  }
  get ownerList() {
    return [
      Owner.COMPANY,
      Owner.SELF,
      Owner.OTHER,
    ]
  }
  get purchasedDatetime() {
    return new Date(`${this.purchasedYear}/${this.purchasedMonth}/${this.purchasedDay}`)
  }

  public submit() {
    if (this.$refs.form.validate()) {
      this.createBook({
        userId: this.user.id,
        title: this.title,
        purchasedLocation: this.purchasedLocation,
        purchasedDatetime: this.purchasedDatetime,
        description: this.description,
        type: this.type,
        price: this.price,
        owner: this.owner,
        coverImageFilePath: this.coverImageFilePath,
        purchasedUrl: this.purchasedUrl,
        downloadUrl: this.downloadUrl,
        evaluation: this.evaluation,
        receiptImageFilePath: this.receiptImageFilePath,
      })
    }
  }

  public cancel() {
    this.$emit('cancel')
  }
}
</script>

<style module>
.group {
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>

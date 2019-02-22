<template>
  <v-layout wrap v-scroll:#scroll-target="onScroll">
    <template v-for="book in books">
      <v-flex xs12 :key="book.id">
          <v-card color="grey darken-2" class="white--text">
            <v-layout>
              <v-flex xs5>
                <v-img
                  :src="book.coverImageFilePath"
                  height="125px"
                  contain
                ></v-img>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{ book.title }}</div>
                    <div>価格: {{ book.price }}</div>
                    <div>購入日時: {{ book.purchasedDatetime | toDate }}</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">
              <v-spacer></v-spacer>
              <template v-for="(isGood, i) in toStar(book.evaluation)">
                <v-icon :key="`star_${i}`">star_border</v-icon>
              </template>
            </v-card-actions>
          </v-card>
      </v-flex>
    </template>
  </v-layout>
</template>

<script lang="ts">
import { Evaluation, IBook } from '@/boundary/bookApplicationService/InOutType'
import { toDate } from '@/submodules/datetime'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  filters: {
    toDate,
  },
})
export default class BookList extends Vue {
  @Prop({required: true})
  public books!: IBook[]

  public toStar(evaluation: Evaluation | null) {
    return [...Array(5)].map((_, i) => i < (evaluation || 0))
  }

  public onScroll(e: any) {
    if ((e.target.scrollTop + e.target.offsetHeight) >= e.target.scrollHeight) {
      this.$emit('seeMore')
    }
  }
}
</script>

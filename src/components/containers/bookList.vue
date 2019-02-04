<template>
  <v-layout row wrap>
    <template v-for="book in books">
      <v-flex xs12 md5 offset-md2 :key="book.id">
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
import { Evaluation } from '@/boundary/bookApplicationService/InOutType'
import { depose, initialize } from '@/store/containers/bookList/action'
import selector from '@/store/containers/bookList/selector'
import { toDate } from '@/submodules/datetime'
import { mapComputed } from '@/submodules/store'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  computed: mapComputed(selector),
  filters: {
    toDate,
  },
})
export default class BookList extends Vue {
  public mounted() {
    this.$store.dispatch(initialize())
  }

  public destroyed() {
    this.$store.dispatch(depose())
  }

  public toStar(evaluation: Evaluation | null) {
    return [...Array(5)].map((_, i) => i < (evaluation || 0))
  }
}
</script>

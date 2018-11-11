<template>
  <Auth>
    <router-view/>
  </Auth>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import Auth from '@/components/middleware/auth.vue'

@Component({
  components: {
    Auth,
  },
})
export default class Main extends Vue {
}
</script>

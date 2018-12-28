<template>
  <AuthLayout />
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import AuthLayout from './authLayout.vue'

@Component({
  components: {
    AuthLayout,
  },
})
export default class Default extends Vue {
}
</script>

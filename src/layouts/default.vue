<template>
  <Auth>
    <GoogleContacts/>
  </Auth>
</template>

<script lang="ts">
import Vue from 'vue';
import GoogleContacts from './googleContacts.vue';
import Auth from '@/components/middleware/auth.vue';

export default Vue.extend({
  name: 'default',
  components: {
    GoogleContacts,
    Auth,
  },
});
</script>

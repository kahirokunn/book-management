<template>
  <GoogleContacts/>
</template>

<script lang="ts">
import Vue from 'vue';
import GoogleContacts from './googleContacts.vue';

export default Vue.extend({
  name: 'default',
  components: { GoogleContacts },
});
</script>

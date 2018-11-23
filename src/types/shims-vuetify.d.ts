import Vue from 'vue'

declare global {
  class VForm extends Vue {
    public validate(): boolean
  }
}

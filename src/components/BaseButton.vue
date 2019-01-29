<!-- prettier-ignore -->
<docs>
# BaseButton

[[toc]]

## About

`button` tag component

## Example & Variation

### default

```HTML
<BaseButton>Default Button</BaseButton>
```

<BaseButton>Default Button</BaseButton>

### primary

```HTML
<BaseButton variation="primary">Primary Button</BaseButton>
```

<BaseButton variation="primary">Primary Button</BaseButton>

</docs>

<template>
  <button
    :type="type"
    :class="`base-button--${variation}`"
    class="base-button"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    variation: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'primary'].includes(value);
      },
    },
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  border: solid 1px $color-text;
  border-radius: 3px;
  padding: 8px 16px 9px;
  font-size: 1rem;
  font-weight: 600;
  color: $color-text;
  cursor: pointer;
}
.base-button--primary {
  color: #fff;
  background-color: $color-vue;
  border-color: $color-vue;
}
</style>

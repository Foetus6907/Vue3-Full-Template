<script setup lang="ts">
import { useI18n } from "vue-i18n";
import HelloWorld from "./components/HelloWorld.vue";

const { t } = useI18n();
</script>

<template>
  <HelloWorld :msg="t('welcome')" />
</template>

<style lang="scss"></style>

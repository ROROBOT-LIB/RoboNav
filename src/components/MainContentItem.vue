<template>
  <div>
    <template v-if="item.web">
      <WebItem :item="item" :transName="transName" />
    </template>
    <template v-else-if="item.children">
      <div>
        <h3 :id="transName(item)">
          <i v-if="item.icon" :class="item.icon"></i>
          {{ transName(item) }}
          <span v-show="item.is_hot" class="label label-pink">Hot</span>
        </h3>
        <div v-for="(child, idx) in item.children" :key="idx">
          <MainContentItem :item="child" :transName="transName" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import WebItem from './WebItem.vue'
const props = defineProps({
  item: Object,
  transName: Function
})
</script> 
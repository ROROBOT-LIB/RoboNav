<template>
  <li>
    <a v-if="item.web || !item.children" :href="'#' + transName(item)" class="smooth">
      <i v-if="item.icon" :class="item.icon"></i>
      <span class="title">{{ transName(item) }}</span>
      <span v-show="item.is_hot" class="label label-pink pull-right hidden-collapsed">Hot</span>
    </a>
    <template v-if="item.children">
      <a :href="'#' + transName(item)" class="smooth">
        <i v-if="item.icon" :class="item.icon"></i>
        <span class="title">{{ transName(item) }}</span>
        <span v-show="item.is_hot" class="label label-pink pull-right hidden-collapsed">Hot</span>
      </a>
      <ul>
        <SidebarMenuItem v-for="(child, idx) in item.children" :key="idx" :item="child" :transName="transName" />
      </ul>
    </template>
  </li>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  item: Object,
  transName: Function
})
</script> 
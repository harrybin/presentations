<!--
Usage Examples:

<Aside type="note">
  This is a note with default title.
</Aside>

<Aside type="tip" title="Pro Tip">
  This is a tip with custom title.
</Aside>

<Aside type="important">
  **Important information** with markdown support.
</Aside>

<Aside type="warning">
  Critical content with `inline code` and [links](https://example.com).
</Aside>

<Aside type="caution" title="Breaking Change">
  Negative potential consequences of an action.
</Aside>

Available types: note, tip, important, warning, caution
-->

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ['note', 'tip', 'important', 'warning', 'caution'].includes(value.toLowerCase())
  },
  title: {
    type: String,
    required: false,
    default: null
  }
})

// Define the alert configurations
const alertConfig = {
  note: {
    icon: '💡',
    color: '#1f6feb',
    backgroundColor: '#ddf4ff',
    borderColor: '#1f6feb',
    defaultTitle: 'Note'
  },
  tip: {
    icon: '💡',
    color: '#1a7f37', 
    backgroundColor: '#d1e7dd',
    borderColor: '#1a7f37',
    defaultTitle: 'Tip'
  },
  important: {
    icon: '❗',
    color: '#8250df',
    backgroundColor: '#f3f0ff',
    borderColor: '#8250df',
    defaultTitle: 'Important'
  },
  warning: {
    icon: '⚠️',
    color: '#bf8700',
    backgroundColor: '#fff8c5',
    borderColor: '#bf8700',
    defaultTitle: 'Warning'
  },
  caution: {
    icon: '🚨',
    color: '#d1242f',
    backgroundColor: '#ffebe9',
    borderColor: '#d1242f',
    defaultTitle: 'Caution'
  }
}

const config = computed(() => alertConfig[props.type.toLowerCase()])
const displayTitle = computed(() => props.title || config.value.defaultTitle)
</script>

<template>
  <div 
    class="aside-container"
    :style="{
      backgroundColor: config.backgroundColor,
      borderLeftColor: config.borderColor,
      color: config.color
    }"
  >
    <div class="aside-header">
      <span class="aside-icon">{{ config.icon }}</span>
      <span class="aside-title" :style="{ color: config.color }">{{ displayTitle }}</span>
    </div>
    <div class="aside-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.aside-container {
  border-left: 4px solid;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.5;
}

.aside-header {
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 16px;
}

.aside-icon {
  margin-right: 8px;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
}

.aside-title {
  font-weight: 600;
}

.aside-content {
  color: #24292f;
}

.aside-content :deep(p) {
  margin: 0 0 8px 0;
}

.aside-content :deep(p:last-child) {
  margin-bottom: 0;
}

.aside-content :deep(code) {
  background-color: rgba(175, 184, 193, 0.2);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-size: 85%;
}

.aside-content :deep(pre) {
  background-color: rgba(175, 184, 193, 0.1);
  padding: 12px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 8px 0;
}

.aside-content :deep(strong) {
  font-weight: 600;
}

.aside-content :deep(em) {
  font-style: italic;
}

.aside-content :deep(ul),
.aside-content :deep(ol) {
  margin: 8px 0;
  padding-left: 20px;
}

.aside-content :deep(li) {
  margin: 4px 0;
}

.aside-content :deep(a) {
  color: #0969da;
  text-decoration: none;
}

.aside-content :deep(a:hover) {
  text-decoration: underline;
}
</style>

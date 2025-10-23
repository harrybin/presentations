<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  url: { type: String, required: true },
  regex: { type: String, required: false },
  scale: { type: Number, required: false, default: 100 },
  width: { type: String, required: false, default: '100%' },
  height: { type: String, required: false, default: '100%' }
})

const content = ref('')
const loading = ref(true)
const error = ref(null)

async function fetchAndExtract() {
  loading.value = true
  error.value = null
  try {
    const response = await fetch(props.url)
    if (!response.ok) throw new Error('Failed to fetch content')
    const html = await response.text()
    let extracted = ''
    if (props.regex) {
      const match = html.match(new RegExp(props.regex, 's'))
      if (!match) throw new Error('Regex not found in content')
      extracted = match[0]
    } else {
      extracted = html
    }
    content.value = extracted
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}

onMounted(fetchAndExtract)
watch(() => [props.url, props.regex], fetchAndExtract)
</script>

<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else :style="{ width: props.width, height: props.height, overflow: 'auto' }">
      <div v-html="content" :style="{
        transform: `scale(${props.scale / 100})`,
        transformOrigin: 'top left',
        width: `${100 / (props.scale / 100)}%`,
        height: `${100 / (props.scale / 100)}%`
      }">
      </div>
    </div>
  </div>
</template>

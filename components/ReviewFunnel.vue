<!--
ReviewFunnel.vue — pipeline animation for the "Batch Size Trap".

Colored balls (PRs / commits) flow fast from left to right through
PLAN → CODE → REVIEW → TEST → DEPLOY. At the REVIEW funnel they slow
down drastically and pile up — the human review bottleneck. Pure
SVG + requestAnimationFrame, no extra dependencies. Loops forever.

Usage:
  <ReviewFunnel />
  <ReviewFunnel :count="40" accent="#c0455f" />
-->

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  count: { type: Number, default: 32 },         // balls in flight
  accent: { type: String, default: '#c0455f' }, // REVIEW highlight + funnel
  bg: { type: String, default: '#ffffff' },
})

const W = 1000
const H = 220
const cx = W / 2          // funnel center (REVIEW)
const fast = 2.4          // base speed px/frame
const slow = 0.12         // speed at the bottleneck
const half = 26           // funnel half-throat
const colors = ['#3b6b94', '#4e8a4e', '#b07a3c', '#c0455f']
const stages = [
  { x: 120, label: 'PLAN' },
  { x: 310, label: 'CODE' },
  { x: 500, label: 'REVIEW', hot: true },
  { x: 690, label: 'TEST' },
  { x: 880, label: 'DEPLOY' },
]

const balls = ref([])
let raf = 0

// funnel half-height as a function of x: full pipe edges pinch to `half` at center
function gap(x) {
  const d = Math.min(1, Math.abs(x - cx) / 320)
  const e = d * d * (3 - 2 * d) // smoothstep
  return half + (84 - half) * e
}
// speed multiplier: ~1 far away, near 0 at the throat
function speedAt(x) {
  const d = Math.min(1, Math.abs(x - cx) / 160)
  return slow + (fast - slow) * (d * d)
}

function spawn(x = -20) {
  return {
    x,
    yOff: (Math.random() * 2 - 1),
    color: colors[Math.trunc(Math.random() * colors.length)],
    r: 6 + Math.random() * 2,
    p: Math.random() * Math.PI * 2,
  }
}

function tick() {
  const list = balls.value
  for (const b of list) {
    b.x += speedAt(b.x)
    if (b.x > W + 20) { b.x = -20; b.yOff = Math.random() * 2 - 1 }
    b.p += 0.04
  }
  balls.value = [...list]
  raf = requestAnimationFrame(tick)
}

onMounted(() => {
  balls.value = Array.from({ length: props.count }, (_, i) =>
    spawn((i / props.count) * (W + 40) - 20))
  raf = requestAnimationFrame(tick)
})
onBeforeUnmount(() => cancelAnimationFrame(raf))

const mid = H / 2
const y = (b) => mid + b.yOff * (gap(b.x) - b.r - 4)
const topPath =
  `M0,${mid - 84} L${cx - 320},${mid - 84} C${cx - 120},${mid - 84} ${cx - 120},${mid - half} ${cx},${mid - half} C${cx + 120},${mid - half} ${cx + 120},${mid - 84} ${cx + 320},${mid - 84} L${W},${mid - 84}`
const botPath =
  `M0,${mid + 84} L${cx - 320},${mid + 84} C${cx - 120},${mid + 84} ${cx - 120},${mid + half} ${cx},${mid + half} C${cx + 120},${mid + half} ${cx + 120},${mid + 84} ${cx + 320},${mid + 84} L${W},${mid + 84}`
</script>

<template>
  <svg :viewBox="`0 0 ${W} ${H + 64}`" class="rf" :style="{ background: bg }">
    <g transform="translate(0,64)">
      <!-- funnel walls -->
      <path :d="topPath" fill="none" stroke="#cfcfcf" stroke-width="2" />
      <path :d="botPath" fill="none" stroke="#cfcfcf" stroke-width="2" />
      <!-- stage markers + labels -->
      <g v-for="s in stages" :key="s.label">
        <line :x1="s.x" :x2="s.x" y1="-26" :y2="20" stroke="#d0d0d0"
              stroke-width="2" stroke-dasharray="3 5"
              :stroke="s.hot ? accent : '#d0d0d0'" :opacity="s.hot ? 0.7 : 1" />
        <text :x="s.x" y="-30" text-anchor="middle"
              :fill="s.hot ? accent : '#6b6b6b'"
              font-size="9" font-weight="700" letter-spacing="1">{{ s.label }}</text>
      </g>
      <!-- balls -->
      <circle v-for="(b, i) in balls" :key="i" :cx="b.x" :cy="y(b)"
              :r="b.r" :fill="b.color" opacity="0.9" />
    </g>
  </svg>
</template>

<style scoped>
.rf {
  width: 100%;
  height: auto;
  display: block;
  font-family: ui-sans-serif, system-ui, sans-serif;
}
</style>

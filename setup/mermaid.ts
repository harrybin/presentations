import type { MermaidConfig } from "mermaid";

export default function setupMermaid(): Partial<MermaidConfig> {
  return {
    theme: "base",
    themeVariables: {
      darkMode: false,
      fontFamily: 'Inter, "Segoe UI", sans-serif',
      fontSize: "18px",
      lineColor: "#3f2b52",
      textColor: "#140922",
      primaryColor: "#f6eef8",
      primaryBorderColor: "#7e2a80",
      primaryTextColor: "#140922",
      secondaryColor: "#f3eaf8",
      secondaryBorderColor: "#5f1f62",
      secondaryTextColor: "#140922",
      tertiaryColor: "#eee3f6",
      tertiaryBorderColor: "#a24aa3",
      noteBkgColor: "#f7effb",
      noteBorderColor: "#7a2f7c",
      noteTextColor: "#1d0a2d",
      clusterBkg: "#f7effb",
      clusterBorder: "#b98abb",
      edgeLabelBackground: "#ffffff",
      nodeTextColor: "#140922",
    },
    themeCSS: `
svg {
  overflow: visible;
}

.node rect,
.node polygon,
.node path,
.node circle {
  rx: 10px;
  ry: 10px;
  stroke-width: 1.9px;
  filter: drop-shadow(0 3px 6px rgba(27, 10, 42, 0.18));
  transition: filter 260ms ease, stroke-width 260ms ease;
}

.node:hover rect,
.node:hover polygon,
.node:hover path,
.node:hover circle {
  filter: drop-shadow(0 7px 12px rgba(27, 10, 42, 0.28));
  stroke-width: 2.2px;
}

/* Entity types: aligned with Xebia theme family, lightly shifted for differentiation. */
.node.entityPhase rect,
.node.entityPhase polygon,
.node.entityPhase path {
  fill: #831b84 !important;
  stroke: #4f1250 !important;
}

.node.entityPhase2 rect,
.node.entityPhase2 polygon,
.node.entityPhase2 path {
  fill: #9b2d9b !important;
  stroke: #631a63 !important;
}

.node.entityPhase3 rect,
.node.entityPhase3 polygon,
.node.entityPhase3 path {
  fill: #b24cb2 !important;
  stroke: #7b2f7b !important;
}

.node.entityPhase4 rect,
.node.entityPhase4 polygon,
.node.entityPhase4 path {
  fill: #6f1a70 !important;
  stroke: #3d0f3d !important;
}

.node.entityArtifact rect,
.node.entityArtifact polygon,
.node.entityArtifact path {
  fill: #f2e6f7 !important;
  stroke: #9a5ca8 !important;
}

.node.entityOutcome rect,
.node.entityOutcome polygon,
.node.entityOutcome path {
  fill: #5a145b !important;
  stroke: #2e082f !important;
}

.node.entityPhase span,
.node.entityPhase2 span,
.node.entityPhase3 span,
.node.entityPhase4 span,
.node.entityOutcome span {
  color: #ffffff !important;
}

.edgePath .path,
.flowchart-link,
.edge-thickness-normal,
.edge-thickness-thick {
  stroke-dasharray: 8 7;
  animation: mermaid-edge-flow 1.8s linear infinite;
  stroke-width: 2px;
}

.arrowheadPath,
marker path {
  animation: mermaid-arrow-pulse 1.8s ease-in-out infinite;
  transform-origin: center;
}

.edgeLabel {
  animation: mermaid-soft-fade 2.3s ease-in-out infinite alternate;
}

@keyframes mermaid-edge-flow {
  to {
    stroke-dashoffset: -30;
  }
}

@keyframes mermaid-arrow-pulse {
  0%,
  100% {
    opacity: 0.86;
  }
  50% {
    opacity: 1;
  }
}

@keyframes mermaid-soft-fade {
  from {
    opacity: 0.92;
  }
  to {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .edgePath .path,
  .flowchart-link,
  .edge-thickness-normal,
  .edge-thickness-thick,
  .arrowheadPath,
  marker path,
  .edgeLabel {
    animation: none !important;
    transition: none !important;
  }
}
`,
  };
}

---
theme: "@xebia/slidev-theme-xebia"
transition: "fade"
addons:
    - slidev-component-progress
    - "@xebia/slidev-addon-components-common"
# disabled pdf downloading in SPA build, can also be a custom url
download: false
browserExporter: true
# disable slide recording, can be boolean, 'dev' or 'build'
record: false
# disable editor for slides editing, can be boolean, 'dev' or 'build'
editor: true
# take snapshot for each slide in the overview
overviewSnapshots: false
# background glow animation
glowEnabled: true
###### ALL slides start ######
src: devcontainer.md
---
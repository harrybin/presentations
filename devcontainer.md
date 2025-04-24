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
###### slides start ######
layout: cover
title: Revolutionizing Development with Dev-Containers
description: Explore the benefits, configuration, and impact of Dev-Containers on modern development workflows.
---

# TODO

---
title: Speaker
layout: intro
src: speaker/%SLIDEV_SPEAKER%/speaker.md
---

---
layout: image-right
background: /compass-right.png
title: Agenda / Expectations
hideInToc: true
---

# Agenda / Expectations

<div class="ml-16">

<Toc minDepth="1" maxDepth="1" />

</div>

---

# Introduction/Goal

- Consistency, isolation, and portability in development
- Transforming how we write, test, and deploy code
- Applicable to web development, DevOps, and beyond


<!-- Notes -->
<!-- Welcome to this presentation on Dev-Containers. Today, we will explore how they can revolutionize your development process. -->

---

# Why Dev-Containers?

- Ensure consistent environments across teams
- Isolate dependencies and avoid conflicts
- Portability across different systems

<!-- Notes -->
<!-- Dev-Containers solve common issues like "it works on my machine" by providing consistent and isolated environments. -->

---

# Beyond Web Development

- DevOps workflows
- Data science and machine learning
- Embedded systems development

<!-- Notes -->
<!-- While Dev-Containers are popular in web development, their benefits extend to various other domains. -->

---
layout: two-column
---
# Performance Considerations

::left::

## Pro

- Faster setup times
<v-clicks>

- Optimized resource usage
- Improved developer productivity
- Faster context switching
- Isolation of environments
</v-clicks>

::right::

<v-click>

## Contra

- Virtualization overhead slows down
</v-click>
<v-clicks>

- Container images can be large and consume disk space
- Isolation can lead to access issues (network, debugging)
- Learning curve for new tools and technologies

</v-clicks>

<!-- Notes -->
<!-- Using Dev-Containers can even lead to performance improvements, making your workflows more efficient. -->

---

# Practical Benefits

- Simplified onboarding for new team members
- Easier collaboration across distributed teams
- Enhanced security through isolation

<!-- Notes -->
<!-- Let's dive into the practical benefits of using Dev-Containers in your projects. -->

---

# Configuring Dev-Containers

- Define environments using `devcontainer.json`
- Integrate with popular tools like Docker and VS Code
- Customize for specific project needs

<!-- Notes -->
<!-- Configuration is straightforward and allows for a high degree of customization to suit your project requirements. -->

---

# Revolutionizing Development

- Streamlined workflows
- Reduced errors and inconsistencies
- A more enjoyable development experience

<!-- Notes -->
<!-- By adopting Dev-Containers, you can transform your development process into something more efficient, secure, and enjoyable. -->

---

# Conclusion

- Embrace Dev-Containers for modern development
- Unlock consistency, isolation, and portability
- Revolutionize your workflows today

<!-- Notes -->
<!-- Thank you for joining this session. I hope you are inspired to explore Dev-Containers further. -->

---
src: /special-slides/questions.md
---

---
src: /special-slides/thank-you.md
---

---
layout: end
level: 2
hideInToc: true
---

# End of presentation
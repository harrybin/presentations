---
theme: "@xebia/slidev-theme-xebia"
transition: "fade"
addons:
  - slidev-component-progress
  - "@xebia/slidev-addon-components-common"
  - slidev-addon-qrcode
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
#background: /devcontainer.jpeg
#description: Explore the benefits, configuration, and impact of Dev-Containers on modern development workflows.
hideInToc: true
routeAlias: webappLocalization
background: /developer-in-words.png
---

# It's all greek to me! 
## Localizing Web-Apps elegant and easy

---
title: Speaker
layout: intro
src: special-slides/speaker.md
---

<!-- speaker -->

---
layout: image-right
background: /compass-right.png
title: Agenda
hideInToc: true
---

<h1 class="h-auto!"> Agenda </h1>

<div class="ml-16">

<Toc minDepth="1" maxDepth="1"/>

</div>

---
title: Usual Localization Process
---

<h1 class="h-auto!"> Usual Localization Process </h1>

<v-clicks>

- Extract user-facing text from source code
- Replace text with translation keys or components
- Store translations in separate files (e.g., JSON)
- Use a localization library (e.g., react-intl)

</v-clicks>


````md magic-move
```jsx
// Before
<h1>Welcome to our site!</h1>
```

```jsx
// Extract user-facing text from source code
// Replace text with translation keys or components
import { useTranslation } from 'react-intl'
function Home() {
  const { t } = useTranslation()
  return <h1>{t('welcome_message')}</h1>
}

// // Store translations in separate files (e.g., JSON)
// {
//   "welcome_message": "Welcome to our site!"
// }
```

```jsx
// Use a localization library (e.g., react-intl)
// Load and switch languages dynamically
import { useTranslation } from 'react-intl'
function Home() {
  const { t, i18n } = useTranslation()
  return (
    <>
      <h1>{t('welcome_message')}</h1>
      <button onClick={() => i18n.changeLanguage('de')}>Deutsch</button>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
    </>
  )
}
```
````

--- 
title: Magic Strings
layout: image-right
background: /magic-strings.png
hideInToc: true
---

<h1 class="h-auto!"> Magic Strings </h1>

<v-clicks>

- **Magic strings** are hard-coded string values used directly in code.
- They often appear multiple times and are not given a descriptive name.
- Example: using `"welcome_message"` directly in many places.

</v-clicks>

<br/>

## Why Avoid Magic Strings?

<v-clicks>

- **No compile time checks:** Typos in strings are not caught until runtime.
- **Error-prone:** Typos within the magic string are hard to catch and can break functionality.
- **Hard to maintain:** Changing a value requires updating every occurrence.
- **Difficult to refactor:** Refactoring tools may not catch all usages.
- **No context:** The meaning of the string is unclear without documentation.

</v-clicks>

--- 
title: Disadvantages of Simple JSON Key-Value Translations
layout: image-right
background: /json-translations.png
hideInToc: true
---

# Disadvantages of Simple JSON Translations 

<v-clicks>

- **No structure:** Flat key-value pairs become hard to manage in large projects.
- **Context issues:** Same key may have different meanings in different places.
- **No support for plurals or gender:** Difficult to handle language-specific rules.
- **No metadata:** Can't add comments or notes for translators.
- **Hard to organize:** Grouping related translations is not straightforward.
- **No validation:** Typos or missing keys are only found at runtime.
- **Size issues:** Large JSON files can become unwieldy and slow to load.

</v-clicks>

<!--
**No support for plurals or gender:**
- Many languages use different words for singular and plural (e.g., "1 apple" vs. "2 apples").
- Some languages change words based on gender (e.g., "he is ready" vs. "she is ready").
- Simple key-value pairs do not provide a way to define these variations.
- Handling these cases requires more advanced structures or libraries that support pluralization and gender rules.
-->

--- 
title: Disadvantages Summary
layout: image-right
background: /error-failed.png
hideInToc: true
---

# Disadvantages Summary

<v-click>

- Magic strings: 
  - No **compile-time** checks; typos only found at runtime.
  - Difficult to **refactor** and understand meaning.

</v-click>

<br/>

<v-click>

- Standard JSON Key-Value pairs
  - Lack of **structure**
  - **No** meta data/context, comments or **hints for** developers or **translators**, plurals, or gender rules.
  - **Large** files can be slow and unwieldy.
</v-click>

---
title: Solution
layout: image-right
background: /idea-new.png
hideInToc: true
---

<h1 class="h-auto!"> Solution </h1>

<v-clicks>

- _Avoid **magic strings**_ 
  - use **Typescript**
  - use **Interfaces**

<br/>

- _**Structure** the JSON file and add metadata for the keys_
  - **split** the JSON file into multiple files
  - use a **naming convention** for the keys
  - extend **value** not to be a simple string, but an **object with metadata**
  
<br/>

- _use **tooling** to support your localization process_
  - see **mising** translations
  - support **creating** new translations
  - support **editing** translations

</v-clicks>

---

# How to do it better...

<v-clicks>

- Use **Typescript** to avoid magic strings  ➡️  easy
- Use **Interfaces** to define the structure of your translations
  - introduce a new translation method/hook
</v-clicks>

<v-after>

```jsx {all|7}{maxHeight:'250px'}
/**
* Hook to return a function, which translates the given text identified by its key
* or returns the key itself, when no text is found.
*/
export function useTranslation(): Translate {
    const intl = useIntl();
    return (textKey: keyof I18nTexts, paramsObj?: Record<string, PrimitiveType>) => {
        return translateText(intl, textKey, paramsObj);
    };
}

/**
* Result function type allowing to translate a single text in functional components.
*/
export type Translate = 
    (textKey: keyof I18nTexts, paramsObj?: Record<string, PrimitiveType> | undefined) 
        => string;

```

</v-after>

<!--
PrimitiveType will be shown in the demo if of interest, but it's only `export type PrimitiveType = string | number | boolean | null | undefined | Date;`

Here the interface I18nTexts is the key to the translations.

-->

---
title: How to do all that? Interfaces
hideInToc: true
---

<h1 class="h-auto!"> Interfaces for Translations </h1>

Compose them:

```jsx {all|6}
import I18nTextsCommon from './I18nTextsCommon';
import I18nTextsModule from './I18nTextsModule';
/**
 * A single interface containing keys for all translatable texts in the application.
 */
export default interface I18nTexts extends I18nTextsCommon, I18nTextsModule {}
```

<v-click>
```jsx {all|5}{maxHeight:'230px'}
/**
 * A single interface containing keys for all translatable texts in the application.
 */
export default interface I18nTexts {
    app_title: WebExtensionMessage;
    loading: WebExtensionMessage;
    error_message_generic: WebExtensionMessage;
    error_message: WebExtensionMessage;
    debug_active: WebExtensionMessage;
    debug_hint: WebExtensionMessage;
    debug_mode: WebExtensionMessage;
    user: WebExtensionMessage;
    firstname: WebExtensionMessage;
    lastname: WebExtensionMessage;
    route_not_found: WebExtensionMessage;
}
```
</v-click>

<!--
[click] compose them from smaller interfaces

[click] let's look at the interface for the common texts

[click] ah, here we find the class/interface for a single translation entry
-->

---
title: How to do all that? WebExtensionMessage
layout: image-right
background: /webextension-message.png
hideInToc: true
---

# WebExtensionMessage

- this is the **interface** for a **single translation entry**
- its an standardized structure defined by the [WebExtension API of Mozilla](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference)

<br/>

```jsx
export interface WebExtensionMessage {
    message: string;
    description?: string;
}
```

In my case simplyfied, I omitted the `placeholders` part, which is not needed because that is supported by react-intl.
 
---

# Better JSON Files

```json {all|4|11|14|21}{maxHeight:'350px', maxWith:'100%'}
{
  "app_title": {
    "message": "Crazy App",
    "description": "The title of the application, DOT NOT TRANSLATE!"
  },
  "loading": {
    "message": "Lade ..."
  },
  "error_message_generic": {
    "message": "Es ist ein Fehler ist aufgetreten. Bitte melden Sie den Fehler.",
    "description": "Eine Beschreibung zur Message, die dem Übersetzer oder anderen Entwicklern helfen/Hinweise geben kann."
  },
  "error_message": {
    "message": "Fehler: {error_message}",
  },
  "app_titleNew": {
    "message": "hallo new"
  },
  "debug_active": {
    "message": "Debug Modus aktiv. Zum deaktiveren die Tastenkombination **Ctrl + Alt + Shift + D** drücken.",
    "description": "Dieser Text wird als Markdown interpretiert"
  },
  "debug_hint": {
    "message": "Der Debug Modus kann durch die Tastenkombination **Ctrl + Alt + Shift + D** aktiviert werden.",
    "description": "Dieser Text wird als Markdown interpretiert"
  },
  "debug_mode": {
    "message": "Debug Modus"
  },
  "firstname": {
    "message": "Vorname"
  },
  "lastname": {
    "message": "Nachname"
  },
  "user": {
    "message": "Benutzer"
  },
  "route_not_found": {
    "message": "Route nicht gefunden"
  }
}
```

<!--
That's how it looks like in the JSON file
-->

---
layout: image-right
background: /i18nAlly.png
backgroundSize: 60%
---

# Tooling 

## VSCode extension: [i18n Ally](https://marketplace.visualstudio.com/items?itemName=antfu.i18n-ally) ![](/i18nAlly-logo.png)

<br/>

<v-clicks>

- **Real-time translation key detection** in your code
- **Supports many frameworks** (Vue, React, Angular, Svelte, etc.)
- **Inline editing** of translation values directly in your editor
- **Missing & unused key detection** for better translation coverage
- **Quick navigation** to translation files and keys
- **Auto-completion** and suggestions for translation keys
- **Visualization** of translation status across languages
- **Supports multiple file formats** (JSON, YAML, etc.)
- **Integrated with VSCode** for a seamless workflow

</v-clicks>

---
layout: image-right
background: /code-right.png
hideInToc: true
---

<br/>
<br/>
<br/>
<br/>

# Demo time!

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

![](/dwx_2025.png)  Juli 2025

<br/>

# End of presentation
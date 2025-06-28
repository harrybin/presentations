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
level: 2
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
level: 2
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
level: 2
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
level: 2
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
level: 2
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
level: 2
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
title: Mapping `WebExtensionMessage` to i18n key-value pairs
level: 2
---

<h1 class="h-auto!"> Mapping `WebExtensionMessage` to i18n key-value pairs </h1>

<v-clicks>

- usual **i18n libraries expect a simple key-value pairs** ➡️ map the `WebExtensionMessage` to a simple string.
- this is also the right place to **add additional logic** ➡️ returning the key itself if no translation is found and **logging** a warning in development mode.
- 💡 you may also return the key itself when in **testing environment** ➡️ In this case your test need not bo aware of the translations.

</v-clicks>

<v-after>

```jsx {all|7|10-11}{maxHeight:'250px'}
export default function translateText(
    intl: IntlShape,
    textKey: keyof I18nTexts,
    paramsObj?: Record<string, PrimitiveType>
) {
    try {
        return intl.formatMessage({ id: textKey }, paramsObj);
    } catch (error) {
        // Do not log in test or production
        if (process.env.NODE_ENV === 'development') {
            console.warn(`Translation text key ${textKey} not found.`);
        }
        return textKey;
    }
}
```

</v-after>



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
- **Auto-completion** and suggestions for translation keys
- **Overlay for translation keys** to see a translations instead of the key
- **Inline editing** of translation values directly in your editor
- **Quick navigation** to translation files and keys
- **Missing & unused key detection** for better translation coverage
- **Visualization** of translation status across languages
- **Integrated with VSCode** for a seamless workflow

</v-clicks>


---
title: Demo Tanslation!
layout: image-right
background: /code-right.png
level: 2
---

## Demo Tanslation!

![](/webextension-message-mapping.png)

<!--
Show:
- i18nAlly in the react demo app https://github.com/harrybin/react/tree/main
  - the features of i18nAlly (list of the slide bfedore this demo)
- the new translation method
- the new interfaces I18nTexts, composed from smaller interfaces
- the WebExtensionMessage interface
- the new JSON file
- `translateText` mapping the `WebExtensionMessage` to i18n key-value pairs
-->

---
title: Translation Management System (TMS)
layout: image-right
background: /developer-language.png
---

# How many languages are to be supported?

<br/>

When there are more then **2 languages** to be supported...

<br/>
<v-clicks>

- a **developer** usually supports his **native language** and the development langauge, **english**
- developers don't like to **"waste time"** on translations
- ➡️ the translations should be done by **translators**

</v-clicks>

<br/>

<v-click>

💡 it is a good idea to use a **translation management system** (TMS).

</v-click>



---
title: Why use a TMS?
layout: image-right
background: /weblate-questionmark.png
level: 2
---

<h1 class="h-auto!"> Why use a TMS? </h1>

<v-clicks>

- **Centralized translation management** for all languages and projects
- **Translation memory**: reuse existing translations
- **Collaboration** between developers, translators and reviewers
- **Glossary and consistency**: maintain consistent terminology
- **Quality assurance**: built-in checks for missing or inconsistent translations
- **Integration** with development tools and CI/CD pipelines
- **Support for context, plurals, and metadata**
- **Easy import/export** of translation files in various formats
- **Progress tracking** and reporting for translation status
- **Scalability**: handle large projects with many languages and keys
- **Git integration**: version control for translation files

</v-clicks>

---
layout: image-right
background: /weblate-questionmark.png
level: 2
---

# Popular Translation Management Systems (TMS)

<v-clicks>

- 📌 **Weblate**
- 💡 **Phrase**
- **Crowdin**
- **Lokalise**
- **POEditor**
- **Transifex**
- **Smartling**
- **Zanata**
- **Memsource**
- **SDL Trados**

</v-clicks>

---
title: Weblate
layout: image-right
background: /weblate-logo.png
backgroundSize: 95%
---

<h1 class="h-auto!"> Weblate</h1>

<v-clicks>

- **Open Source**: No vendor lock-in, self-hosting possible
- **Tight Git integration**: Syncs translations with your repos
- **Real-time collaboration**: Multiple contributors
- **Translation memory** and suggestions for consistency
- **Quality checks**: Automated validation for translations
- **Supports many formats**: JSON, PO, XLIFF, YAML etc.
- **Custom workflows**: Adapt to your team's process
- **Extensible**: Integrate with CI/CD and automation tools
- **Active community** and regular updates

## Hosting Options

- **Self-hosted**: Run Weblate on your own server (Linux, Docker, cloud VM etc.)
- **Docker support**: Official Docker images for easy deployment
- **Managed hosting**: Use [Weblate's cloud service](https://hosted.weblate.org/) for hassle-free setup

</v-clicks>

---
layout: image-right
background: /weblate-logo.png
backgroundSize: 95%
level: 2
---

# How to work with Weblate

<v-clicks>

- Create a **new project** and add your source language files
- Connect your **Git repository** for automatic translation sync
- Add and manage **target languages** for your project
- Use the web-based translation **editor** for easy translation
- Leverage **translation memory with suggestions** for consistency
- Manage **glossary** and terminology for quality and consistency
- Run **automated** quality **checks** and validations
- Assign **roles** and collaborate with team members (review, comment, approve)
- **Import/export** translation files in various formats
- Track **translation progress** and statistics

</v-clicks>

---
title: Demo Weblate!
layout: image-right
background: /code-right.png
level: 2
---

## Demo Weblate!

![](/weblate-logo.png)

<!--
Show:
- 
-->


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
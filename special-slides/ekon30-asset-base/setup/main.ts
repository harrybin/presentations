import { defineAppSetup } from "@slidev/types";

export default defineAppSetup(() => {
  if (!document.querySelector("base")) {
    const base = document.createElement("base");
    base.href = import.meta.env.BASE_URL;
    document.head.prepend(base);
  }
});

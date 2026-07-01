import { defineAppSetup } from "@slidev/types";

export default defineAppSetup(({ router }) => {
  if (typeof window === "undefined" || !router) return;

  const base: string = (router as any).options?.history?.base ?? "";
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const baseWithoutLeadingSlash = normalizedBase.replace(/^\//, "");

  if (!normalizedBase) return;

  const stripBase = (path: string) => {
    if (path.startsWith(normalizedBase))
      return path.slice(normalizedBase.length) || "/";
    if (baseWithoutLeadingSlash && path.startsWith(baseWithoutLeadingSlash))
      return path.slice(baseWithoutLeadingSlash.length) || "/";
    return path;
  };

  const push = router.push.bind(router);
  const replace = router.replace.bind(router);

  router.push = (to: any) => {
    if (to?.path) return push({ ...to, path: stripBase(to.path) });
    if (typeof to === "string") return push(stripBase(to));
    return push(to);
  };

  router.replace = (to: any) => {
    if (to?.path) return replace({ ...to, path: stripBase(to.path) });
    if (typeof to === "string") return replace(stripBase(to));
    return replace(to);
  };
});

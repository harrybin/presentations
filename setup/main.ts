import { defineAppSetup } from "@slidev/types";

export default defineAppSetup(({ router }) => {
  if (typeof window === "undefined" || !router) return;

  const routerOptions =
    "options" in router
      ? (router.options as
          | {
              history?: {
                base?: string;
              };
            }
          | undefined)
      : undefined;
  const base = routerOptions?.history?.base ?? "";
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const baseWithoutLeadingSlash = normalizedBase.replace(/^\//, "");

  if (!normalizedBase) return;

  const hasPathPrefix = (path: string, prefix: string) =>
    path.startsWith(prefix) &&
    (path.length === prefix.length || path[prefix.length] === "/");

  const stripBase = (path: string) => {
    if (hasPathPrefix(path, normalizedBase))
      return path.slice(normalizedBase.length) || "/";
    if (baseWithoutLeadingSlash && hasPathPrefix(path, baseWithoutLeadingSlash))
      return path.slice(baseWithoutLeadingSlash.length) || "/";
    return path;
  };

  type NavigationTarget = Parameters<typeof router.push>[0];
  type NavigationMethod = (to: NavigationTarget) => ReturnType<typeof router.push>;

  const wrapNavigationMethod = (navigate: NavigationMethod): NavigationMethod => {
    return (to) => {
      if (typeof to === "string") return navigate(stripBase(to));
      if (to && typeof to === "object" && "path" in to && typeof to.path === "string")
        return navigate({ ...to, path: stripBase(to.path) });
      return navigate(to);
    };
  };

  router.push = wrapNavigationMethod(router.push.bind(router) as NavigationMethod);
  router.replace = wrapNavigationMethod(router.replace.bind(router) as NavigationMethod);
});

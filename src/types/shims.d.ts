// Lightweight type shims for the editor environment to avoid noisy diagnostics
// These are intentionally permissive and should be removed if you install proper @types packages.

declare module "next/image" {
  const Image: any;
  export default Image;
}

declare module "next/link" {
  const Link: any;
  export default Link;
}

declare module "react" {
  const React: any;
  export default React;
  // Minimal named exports used by the codebase to silence editor diagnostics in this environment.
  export function useState<S = any>(initialState: S | (() => S)): [S, (s: S | ((prev: S) => S)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useRef<T = any>(initial?: T): { current: T | null };
  export const Fragment: any;
  export const Children: any;
  export const createElement: any;
}

// Allow any JSX intrinsic elements to avoid "JSX.IntrinsicElements" errors in environments
// without React types installed. This is a temporary shim for the editor only.
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

export {}
declare global {
  type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>
  type Nullable<T> = T | null
  type Recordable<T = any> = Record<string, T>
  type Writable<T> = {
    -readonly [P in keyof T]: T[P]
  }
}

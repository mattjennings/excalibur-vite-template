// auto import plugin doesn't handle the namespace types so we
// define it ourselves
export {}
declare global {
  const ex: typeof import('excalibur')
  namespace ex {
    export * from 'excalibur'
  }
}

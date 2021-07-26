export function cssStyleSheetSupport() {
  try {
    const styleSheet = new CSSStyleSheet() as CSSStyleSheet & { replace(str: string): void }

    styleSheet.replace('')

    return true
  } catch {
    return false
  }
}

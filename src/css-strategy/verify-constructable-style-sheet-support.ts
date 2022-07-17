const isFirefox = window.navigator.userAgent.includes('Firefox')

export function cssStyleSheetSupport() {
  if (isFirefox) return false

  try {
    const styleSheet = new CSSStyleSheet() as CSSStyleSheet & { replace(str: string): void }

    styleSheet.replace('')

    return true
  } catch {
    return false
  }
}

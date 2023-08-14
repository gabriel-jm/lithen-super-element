const isFirefox = window.navigator.userAgent.includes('Firefox')

export function cssStyleSheetSupport() {
  if (isFirefox) return false

  try {
    const styleSheet = new CSSStyleSheet()

    styleSheet.replaceSync('')

    return true
  } catch {
    return false
  }
}

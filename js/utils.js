/* will probably fail with nested NSs */

function prefixify (url) {
  for (const [ns, prefix] of Object.entries(nsPrefixes)) {
    if (url.startsWith(ns)) {
      return prefix + ':' + url.substring(ns.length)
    }
  }
  return url
}

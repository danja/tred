// minimal 'structured object'/string/tree storage on localstorage
// from https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage

// do with classes!!!

var storage = {
  set: function (key, value) {
    if (!key || !value) {
      return
    }

    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  },
  get: function (key) {
    var value = localStorage.getItem(key)

    if (!value) {
      return
    }
    if (value == null) {
      return false
    }

    // assume it is an object that has been stringified
    if (value[0] === '{') {
      value = JSON.parse(value)
    }

    return value
  }
}

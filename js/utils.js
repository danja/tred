/* 
    minimal 'structured object'/string/tree storage 
    wrapper over localstorage
    see https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage
*/
class Depot {
  constructor (id) {
    this.set('ID', id)
  }

  set (key, value) {
    if (!key || !value) {
      return
    }

    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  }

  get (key) {
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

export { Depot }

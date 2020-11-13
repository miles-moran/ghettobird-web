export const hasSelenium = (blue) => {
    if (blue.options){
        if (blue.options.browser){
            return true
        }
    }
    return false
  }
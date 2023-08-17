
export const regeneration = ({element,current,maxCharacteristics, coefficient, regenFunc}) => {
  let i = current
  const time = setInterval(function () {
    i++
    regenFunc(element,i)
    if (i >= maxCharacteristics) {
      clearInterval(time)
    }
  }, (coefficient * 1000))
}
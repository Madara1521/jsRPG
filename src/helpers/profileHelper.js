
export const regeneration = ({current,maxCharacteristics, coefficient, regenFunc}) => {
  let i = current
  const time = setInterval(function () {
    i++
    regenFunc(i)
    if (i >= maxCharacteristics) {
      clearInterval(time)
    }
  }, (coefficient * 1000))
}
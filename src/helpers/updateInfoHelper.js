
// export const regeneration = ({ element, current, maxCharacteristics, coefficient, regenFunc }) => {
//   let i = current
//   const time = setInterval(function () {
//     regenFunc(element, i++)
//     if (i > maxCharacteristics) {
//       clearInterval(time)
//     }
//   }, (coefficient * 1000))
// }

export const regeneration = ({ element, current, maxCharacteristics, coefficient, regenFunc }) => {
  let i = current
  const time = setInterval(function () {
    regenFunc(element, i++)
    if (i > maxCharacteristics) {
      clearInterval(time)
    }
  }, (coefficient * 1000))
}


// export const regeneration = ({ element, current, maxCharacteristics, coefficient, regenFunc }) => {
//   let i = current
//   const time = setInterval(() => {
//     regenFunc(element, i++)
//     if (i > maxCharacteristics) {
//       clearInterval(time)
//     }
//   }, (coefficient * 1000))
// }

export const regeneration = ({ element, current, maxCharacteristics, coefficient, regenFunc, resetFunc }) => {
  let i = current
  let max = maxCharacteristics
  if(i > max){
    resetFunc(element, maxCharacteristics)
  }
  if (i < max) {
    setTimeout(() => {
      i++
      regenFunc(element, i)
    }, (coefficient*1000))
  }
}

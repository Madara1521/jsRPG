import _ from 'lodash'

export const getSummaryParams = (mainObject ,list, paramPath) => {
  return list.reduce((summaryBonus, bonus) =>  _.get(mainObject,`${bonus}.${paramPath}`, 0) + summaryBonus, 0) 
}

import React from "react"
import { useStyles } from "../../../Styles"
import CharacterClothes from "./CharacterClothes/CharacterClothes"
import PartnerClothes from "./PartnerClothes/PartnerClothes"


const Cloth = () => {
  const classes = useStyles()

  return (
    <div className={classes.clothStyle}>
      <CharacterClothes />
      <PartnerClothes />
    </div>
  )
}

export default Cloth
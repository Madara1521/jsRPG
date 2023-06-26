import React, { useEffect } from "react"
import { useStyles } from "../../../Styles"
import CharacterClothes from "./CharacterClothes/CharacterClothes"
import PartnerClothes from "./PartnerClothes/PartnerClothes"
import { getViewDescription } from "../../../../Redux/actions"
import { connect } from "react-redux"


const Cloth = ({getViewDescription}) => {
  const classes = useStyles()

  useEffect(() => {
    getViewDescription({},{})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={classes.clothStyle}>
      <CharacterClothes />
      <PartnerClothes />
    </div>
  )
}

export default connect(null,{getViewDescription})(Cloth)
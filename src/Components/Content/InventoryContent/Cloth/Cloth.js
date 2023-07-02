import React, { useEffect } from "react"
import { useStyles } from "../../../Styles"
import CharacterClothes from "./CharacterClothes/CharacterClothes"
import PartnerClothes from "./PartnerClothes/PartnerClothes"
import { getViewDescription, setViewItem } from "../../../../Redux/actions"
import { connect } from "react-redux"


const Cloth = ({getViewDescription, setViewItem}) => {
  const classes = useStyles()

  useEffect(() => {
    getViewDescription({},{})
    setViewItem(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={classes.clothStyle}>
      <CharacterClothes />
      <PartnerClothes />
    </div>
  )
}

export default connect(null,{getViewDescription, setViewItem})(Cloth)
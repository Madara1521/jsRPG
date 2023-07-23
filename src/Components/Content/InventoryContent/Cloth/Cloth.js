import React, { useEffect } from "react"
import CharacterClothes from "./CharacterClothes/CharacterClothes"
import PartnerClothes from "./PartnerClothes/PartnerClothes"
import { getViewDescription, setViewItem } from "../../../../Redux/actions"
import { connect } from "react-redux"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  clothStyle: {
    display: 'flex',
    flex: '2',
    flexDirection: 'row',
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column',
    },
  },
}))


const Cloth = ({ getViewDescription, setViewItem }) => {
  const classes = useStyles()

  useEffect(() => {
    getViewDescription({}, {})
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

export default connect(null, { getViewDescription, setViewItem })(Cloth)
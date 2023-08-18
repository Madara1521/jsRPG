import React, { useEffect, useState } from "react"
import CharacterClothes from "./CharacterClothes/CharacterClothes"
import PartnerClothes from "./PartnerClothes/PartnerClothes"
import { getViewDescription, viewItem } from "../../../../Redux/actions"
import { connect } from "react-redux"
import { makeStyles } from "@mui/styles"
import useMediaQuery from '@mui/material/useMediaQuery'
import NextIcon from '@mui/icons-material/NavigateNext'
import divImg from '../../img/divBackground.png'

const useStyles = makeStyles((theme) => ({
  clothStyle: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
  },
  clothContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  invertoryClothTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${divImg})`,
  },
  titleCloth: {
    display: 'flex',
    justifyContent: 'center',
    width: '300px',
    alignItems: 'center',
    border: '3px ridge #a3a3a3',
    backdropFilter: 'blur(3px)',
    [theme.breakpoints.down("sm")]: {
      width: '600px',
      padding: '3px',
      fontSize: '25px !important'
    }
  }
}))


const Cloth = ({ getViewDescription, viewItem }) => {
  const classes = useStyles()
  const [activeTab, setActiveTab] = useState('Character')
  const isMobile = useMediaQuery('(max-width:600px)')

  const handleTabSwitch = () => {
    if (activeTab === 'Character') {
      return setActiveTab('Partner')
    }
    return setActiveTab('Character')
  }

  useEffect(() => {
    getViewDescription({}, {})
    viewItem(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isMobile) {
    return (
      <div className={classes.clothStyle}>
        <div onClick={handleTabSwitch} >
          <div className={classes.invertoryClothTitle}>
            <div className={classes.titleCloth}>
              {activeTab}
              <NextIcon />
            </div>
          </div>
        </div>
        {activeTab === 'Character' && <CharacterClothes />}
        {activeTab === 'Partner' && <PartnerClothes />}
      </div>
    )
  }

  return (
    <div className={classes.clothStyle}>
      <div className={classes.invertoryClothTitle}>
        <div className={classes.titleCloth}>
          Character
        </div>
        <div className={classes.titleCloth}>
          Partner
        </div>
      </div>
      <div className={classes.clothContainer}>
        <CharacterClothes />
        <PartnerClothes />
      </div>
    </div>
  )
}

export default connect(null, { getViewDescription, viewItem })(Cloth)
import { makeStyles } from "@mui/styles"


export const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0em',
      height: '0em'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,0)'
    }
  },
  contentScr: {
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0em',
      height: '0em'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,0)'
    }
  },
  titleComp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'black 1px solid',
    width: '610px',
    height: '37px'
  },
  imgBorder: {
    display: 'flex',
    justifyContent: 'center',
    border: 'black 1px solid'
  },
  charBorder: {
    display: 'flex',
    direction: 'column',
    border: 'black 1px solid',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genBorder: {
    display: 'flex',
    direction: 'column',
    border: 'black 1px solid',
    justifyContent: 'center',
    alignItems: 'center'
  },
  lvlBorder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'black 1px solid',
  },
  headerCss: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    background: 'linear-gradient(0deg, rgba(190,190,190,1) 0%, rgba(214,214,214,1) 11%, rgba(242,241,241,1) 58%)'
  },
  attribCont: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 1px solid',
    width: '100px',
    height: '30px'
  },
  attribBorder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'black 1px solid',
    height: '100vh'
  },
  expLvlBor: {
    display: 'flex',
    border: 'black 1px solid',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lvlHeight: {
    display: 'flex',
    height: '100px'
  },
  iconPluse: {
    display: 'flex',
    backgroundSize: 'cover',
    width: '30px',
    height: '30px',
    justifyContent: 'center',
    border: 'black 1px solid'
  },
  pointsCont: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 3px solid',
    width: '60px',
    height: '30px'
  },
  invertoryClothTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 1px solid',
  },
  talismansCont: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 1px solid',
    width: '49px',
    height: '40px'
  },
  characterClothes: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    border: 'black 1px solid',
    padding: '3px',
    height: '370px'
  },
  helmet: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '70px',
    width: '70px'
  },
  amuletAndRing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '25px',
    width: '25px'
  },
  weaponAndShield: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '150px',
    width: '80px'
  },
  colthPadding: {
    display: 'flex',
    flexDirection: 'row',
    padding: '3px'
  },
  armor: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '120px',
    width: '80px'
  },
  clothStyle: {
    display: 'flex',
    flex: '2',
    flexDirection: 'row'
  },
  clothPartnerAndCharacter: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column'
  },
  belt: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '25px',
    width: '80px'
  },
  glovesAndBoots: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '80px',
    width: '80px',
  },
  armorBeltHelmPading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3px'
  },
  paddingGloves: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px'
  },
  endAmulet: {
    display: 'flex',
    alignItems: 'end'
  },
  stackColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  stackRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  lootAndDescription: {
    display: 'flex',
    flex: '2',
    flexDirection: 'row'
  },
  goldComp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'black 1px solid',
    width: '610px',
    height: '25px'
  },
  nameLoot: {
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    fontSize: '150%',
    border: 'rgba(0, 0, 0, 0.7) 1px solid',
  },
}))
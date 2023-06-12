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
  twoTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '304px',
    height: '37px'
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
  loot: {
    display: 'flex',
    border: 'black 1px solid',
    flexDirection: 'column',
    
  },
  description: {
    display: 'flex',
    border: 'black 1px solid',
    flexDirection: 'column',
  },
  lootComp: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '243px',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0em',
      height: '0em'
    }
  },
  lootCellNull: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lootCellStandart: {
    display: 'flex',
    border: '1px solid #edebeb',
    justifyContent: 'center',
    background:'rgba(182, 200, 209, 0.7)',
    alignItems: 'center',
    minHeight: '25px',
  },
  lootCellActive: {
    display: 'flex',
    border: '1px solid #edebeb',
    justifyContent: 'center',
    background:'rgba(65, 35, 92, 0.7)',
    alignItems: 'center',
    minHeight: '25px',
  },
  lootCellMagic: {
    display: 'flex',
    border: '1px solid #edebeb',
    justifyContent: 'center',
    background:'rgba(10, 32, 199, 0.7)',
    alignItems: 'center',
    minHeight: '25px',
  },
  lootCellKit: {
    display: 'flex',
    border: '1px solid #edebeb',
    justifyContent: 'center',
    background:'rgba(17, 184, 61, 0.7)',
    alignItems: 'center',
    minHeight: '25px',
  },
  lootCellLegendary: {
    display: 'flex',
    border: '1px solid #edebeb',
    justifyContent: 'center',
    background:'rgba(235, 106, 7, 0.7)',
    alignItems: 'center',
    minHeight: '25px',
  },
  goldComp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'black 1px solid',
    width: '610px',
    height: '25px'
  },
  typesOfLoot: {
    display: 'flex',
    justifyContent: 'center',
    background: 'rgba(148, 146, 145)',
    border: '1px solid #ed0000',
    width: '49px',
    height: '35px',

  },
  DescriptionComp: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxHeight: '243px',
    overflowY: 'scroll',
    fontSize: '130%',
    '&::-webkit-scrollbar': {
      width: '0em',
      height: '0em'
    }
  },
  nameLoot: {
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    fontSize: '150%',
    border: 'rgba(0, 0, 0, 0.7) 1px solid',
  },
  lootBonus: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  magicLetters: {
    color: 'blue'
  },
  imgDescription: {
    display: 'flex',
    maxHeight: '100px',
    maxWidth: '100px'
  }
}))
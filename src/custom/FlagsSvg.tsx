import { css } from '../../stitches.config'
import flagBrSvg from '../assets/flag-br.svg'
import flagUsSvg from '../assets/flag-us.svg'

const flag16Class = css({

  width: '16.44px',
  height: '12.33px',
  mr: '3px'

})

type flagsProps = {
  flag: string
}

export const Flag16 = ({ flag }: flagsProps) => {

  switch (flag) {
    case 'flag-br':
      return <img className={flag16Class()} src={flagBrSvg} alt="BR" />
    case 'flag-us':
      return <img className={flag16Class()} src={flagUsSvg} alt="EN" />
    default:
      return <img className={flag16Class()} src={flagUsSvg} alt="EN" />
  }

}

/* export const flagUS16 = (...props) => <img className={flag16Class()} src={flagUsSvg} alt="EN" /> */


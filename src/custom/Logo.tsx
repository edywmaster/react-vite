import { css } from '../../stitches.config'
import ewmLogo from '../assets/ewm.svg'

const LogoClass = css({

  maxWidth: 120,
  height: 'auto'

})

export const Logo = () => <img className={LogoClass()} src={ewmLogo} width="120" height="40" alt="EWM" />

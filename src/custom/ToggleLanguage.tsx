import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '../components'
import { GlobeIcon } from '@radix-ui/react-icons'
import { Flag16 } from './FlagsSvg'
import { i18n, i18nOptions } from '../utils/i18n/i18n';
import { useTranslation } from 'react-i18next'
import { namespaces } from '../utils/i18n/i18n.constants'



export function ToggleLanguage() {

  const keyLngStore = i18nOptions.detection.lookupLocalStorage

  const { t } = useTranslation()

  const lng = [
    {
      code: 'pt-BR',
      text: t("droplng.pt-BR", { ns: namespaces.common }),
      flag: 'flag-br'
    },
    {
      code: 'en',
      text: t("droplng.en", { ns: namespaces.common }),
      flag: 'flag-us'
    }
  ]

  const changeLanguage = (languages: any) => {
    i18n.changeLanguage(languages)
    localStorage.setItem(keyLngStore, languages)
  }

  const currentLanguageCode = localStorage.getItem(keyLngStore)


  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button ghost ><GlobeIcon /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>

          {lng.map(({ code, text, flag }) => (
            <DropdownMenuItem key={code} css={{
              justifyContent: 'start'
            }}
              onClick={() => changeLanguage(code)}
              disabled={code === currentLanguageCode}
            >
              <Flag16 flag={flag} />
              {text}
            </DropdownMenuItem>
          ))}

        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

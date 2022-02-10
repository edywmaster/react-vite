import {
  Link,
  useMatch,
  useResolvedPath
} from 'react-router-dom'
import type { LinkProps } from "react-router-dom";
import { Box, Container, Flex, Text, LinkAnchor } from '../components'
import { Logo } from '../custom/Logo'
import { ToggleTheme } from './ToggleTheme'

import { useTranslation } from 'react-i18next'
import { namespaces } from '../utils/i18n/i18n.constants'


function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
      <Link
        className={LinkAnchor({ variant: match ? 'active' : 'subtle', css: { mr: '$3', '@bp2': { mr: '$7' } } })}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </>
  );
}


export function Header() {

  const { t } = useTranslation(namespaces.common)

  return (
    <Box >
      <Container size="5" css={{
        px: '0px',
        '@bp2': {
          px: '$5'
        }
      }}>
        <Flex
          as="header"
          css={{

            py: '$1',
            px: '$2',
            jc: 'space-between',
            position: 'relative',
            alignItems: 'center',
            zIndex: '1',
            height: 50,

            my: '$5',
            bc: '$loContrast',
            br: '$4',
            bs: '$1',

            '@bp1': {
              py: '$4',
              px: '$4',
              height: 88,

            }
          }}
        >
          <Box
            as="a"
            css={{
              color: '$hiContrast',
              display: 'inline-flex',
              '&:focus': {
                boxShadow: 'none'
              }
            }}
          >
            <span
              style={{
                position: 'absolute',
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                border: 0
              }}
            >
              EWM
            </span>
            <Logo />
          </Box>

          <Flex as="nav" css={{ ai: 'center' }}>

            <CustomLink to="/">
              <Text>{t("menu.home")}</Text>
            </CustomLink>
            <CustomLink to="/contato">
              <Text>{t("menu.contact")}</Text>
            </CustomLink>
            <ToggleTheme />

          </Flex>



        </Flex>
      </Container>
    </Box>
  )
}

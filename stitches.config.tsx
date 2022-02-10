import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import {
  slate,
  slateA,
  slateDark,
  slateDarkA,
  violet,
  violetDark,
  violetA,
  violetDarkA,
  cyan,
  cyanDark,
  blue,
  blueDark,
  gold,
  goldDark,
  red,
  redDark,
  yellow,
  yellowDark,
  blackA,
} from '@radix-ui/colors';

export type { VariantProps } from '@stitches/react';

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  theme: {
    colors: {

      // Import pallets from Radix-ui
      ...slate,
      ...slateA,
      ...violet,
      ...violetA,
      ...cyan,
      ...blue,
      ...gold,
      ...red,
      ...yellow,
      ...blackA,

      // Semantic colors
      bgTheme: '$slate1',
      bgIcons: '$violet4',
      bgScrollBar: '$violet8',
      hiContrast: '$slate12',
      loContrast: '$slate1',
      canvas: 'hsl(0 0% 15%)',
      panel: '$slate3',
      transparentPanel: 'hsl(0, 100%, 100%, 0.97)',
      shadowLight: 'hsl(206, 22%, 7%, 0.35)',
      shadowDark: 'hsl(206, 22%, 7%, 0.20)',
      bgTrasparent: 'hsl(0, 100%, 100%, 0.50)'
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px',
    },
    fonts: {
      untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
      /* roboto: 'Roboto, apple-system, sans-serif',
      poppins: 'Poppins, apple-system, sans-serif', */
    },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {
      1: ' 0px 0px 24px 1px rgba(0,0,0,0.1)'
    },
    transitions: {},
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
    bp4: '(min-width: 1800px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({ flexDirection: value }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({ alignItems: value }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({ alignContent: value }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({ justifyContent: value }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({ flexShrink: value }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({ lineHeight: value }),

    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({ pointerEvents: value }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme('dark-theme', {
  colors: {
    // Import pallets from Radix-ui
    ...slateDark,
    ...slateDarkA,
    ...violetDark,
    ...violetDarkA,
    ...cyanDark,
    ...blueDark,
    ...goldDark,
    ...redDark,
    ...yellowDark,
    ...blackA,


    // Semantic colors
    bgTheme: '$slate1',
    bgIcons: '$violet4',
    bgScrollBar: '$violet4',
    hiContrast: '$slate12',
    loContrast: '$slate1',
    canvas: 'hsl(0 0% 15%)',
    panel: '$slate3',
    transparentPanel: 'hsl(0, 100%, 100%, 0.97)',
    shadowLight: 'hsl(206, 22%, 7%, 0.35)',
    shadowDark: 'hsl(206, 22%, 7%, 0.20)',
    bgTrasparent: 'hsl(206, 22%, 7%, 0.50)'
  },
})



export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
  html: {
    overflowX: 'hidden',
  },

  body: {
    margin: 0,
    backgroundColor: '$bgTheme',
  },

  'body, button': {
    fontFamily: '$untitled',
  },

  svg: { display: 'block' },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$violet5',
  },
  '::-webkit-scrollbar': {
    width: 6,
    height: 0,
    scrollbarWidth: 6,
  },
  '::-webkit-scrollbar-thumb': {
    background: '$bgScrollBar'
  }

});

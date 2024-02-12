/* eslint-disable no-unused-vars */
export enum Colors {
  WHITE = '#ffffff',
  BLACK = '#000000',
  GRAY_800 = '#36424a',
  GRAY_600 = '#6e7a83',
  GRAY_400 = '#b6babd',
  GRAY_300 = '#e2e4e5',
  GRAY_200 = '#f1f1f1',
  GRAY_100 = '#fafafa',
  ORANGE_800 = '#ff9944',
  ORANGE_600 = '#fbb86d',
  ORANGE_400 = '#fac496',
  BLUE_800 = '#2277dd',
  BLUE_600 = '#3b90fd',
  BLUE_400 = '#94c7d4'
}

export const SemanticColors = {
  text: {
    primary: Colors.GRAY_800,
    secondary: Colors.GRAY_600,
    weak: Colors.GRAY_400,
    link: Colors.BLUE_400,
    linkHover: Colors.BLUE_600
  },
  background: {
    primary: Colors.WHITE,
    secondary: Colors.GRAY_100,
    inverted: Colors.GRAY_800
  },
  icon: {
    primary: Colors.GRAY_800,
    secondary: Colors.GRAY_400,
    inverted: Colors.WHITE
  },
  border: {
    primary: Colors.GRAY_300,
    secondary: Colors.GRAY_600,
    highlight: Colors.ORANGE_600
  },
  button: {
    primary: {
      text: Colors.WHITE,
      background: Colors.BLUE_600,

      textHover: Colors.WHITE,
      backgroundHover: Colors.BLUE_800,

      textInverted: Colors.WHITE,
      backgroundInverted: Colors.ORANGE_600,

      textHoverInverted: Colors.WHITE,
      backgroundHoverInverted: Colors.ORANGE_800
    },
    secondary: {
      text: Colors.GRAY_600,
      background: Colors.WHITE,
      border: Colors.GRAY_300,

      textHover: Colors.GRAY_800,
      backgroundHover: Colors.WHITE,
      borderHover: Colors.GRAY_400,

      textInverted: Colors.GRAY_600,
      backgroundInverted: Colors.GRAY_400,
      borderInverted: Colors.GRAY_400,

      textHoverInverted: Colors.GRAY_800,
      backgroundHoverInverted: Colors.GRAY_400,
      borderHoverInverted: Colors.GRAY_400
    }
  },
  tabBar: {
    active: Colors.BLUE_400,
    default: Colors.GRAY_600,
    hover: Colors.BLUE_800
  },
  label: {
    text: Colors.WHITE,
    primary: Colors.BLUE_600,
    secondary: Colors.ORANGE_400
  },
  toggle: {
    enabled: {},
    disabled: {},
  },
  select: {
    text: {
      primary: Colors.GRAY_800,
      secondary: Colors.GRAY_600,
      highlighted: Colors.BLUE_600,
      disabled: Colors.GRAY_300,
      error: Colors.ORANGE_600
    },
    background: {
      primary: Colors.GRAY_100
    },
    border: {
      primary: Colors.GRAY_600,
      highlighted: Colors.BLUE_600,
      disabled: Colors.GRAY_300,
      error: Colors.ORANGE_600
    }
  }
};

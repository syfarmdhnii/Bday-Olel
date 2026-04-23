/**
 * Design System Constants & Tokens
 * Based on "Nostalgic Romance" design system
 */

export const COLORS = {
  primary: '#610000',
  primaryContainer: '#8b0000',
  onPrimary: '#ffffff',
  onPrimaryContainer: '#ff907f',
  inversePrimary: '#ffb4a8',
  primaryFixed: '#ffdad4',
  primaryFixedDim: '#ffb4a8',
  onPrimaryFixed: '#410000',
  onPrimaryFixedVariant: '#920703',

  secondary: '#b52424',
  secondaryContainer: '#ff5a52',
  onSecondary: '#ffffff',
  onSecondaryContainer: '#600006',
  secondaryFixed: '#ffdad6',
  secondaryFixedDim: '#ffb4ac',
  onSecondaryFixed: '#410003',
  onSecondaryFixedVariant: '#92030f',

  tertiary: '#472029',
  tertiaryContainer: '#61353e',
  onTertiary: '#ffffff',
  onTertiaryContainer: '#da9faa',
  tertiaryFixed: '#ffd9df',
  tertiaryFixedDim: '#f4b6c1',
  onTertiaryFixed: '#330f19',
  onTertiaryFixedVariant: '#663a43',

  error: '#ba1a1a',
  errorContainer: '#ffdad6',
  onError: '#ffffff',
  onErrorContainer: '#93000a',

  background: '#fefccf',
  onBackground: '#1d1d03',
  surface: '#fefccf',
  surfaceBright: '#fefccf',
  surfaceDim: '#dedcb1',
  surfaceTint: '#b52619',
  onSurface: '#1d1d03',
  onSurfaceVariant: '#5a403c',
  surfaceVariant: '#e6e5b9',
  inverseSurface: '#323214',
  inverseOnSurface: '#f5f3c7',

  surfaceContainer: '#f2f0c4',
  surfaceContainerLow: '#f8f6c9',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerHigh: '#eceabe',
  surfaceContainerHighest: '#e6e5b9',

  outline: '#8e706b',
  outlineVariant: '#e3beb8',
} as const;

export const TYPOGRAPHY = {
  headlineLg: {
    fontFamily: 'Noto Serif',
    fontSize: '48px',
    fontWeight: '700',
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
  },
  headlineMd: {
    fontFamily: 'Noto Serif',
    fontSize: '32px',
    fontWeight: '600',
    lineHeight: '1.3',
  },
  bodyRomantic: {
    fontFamily: 'Epilogue',
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '1.5',
  },
  bodyStandard: {
    fontFamily: 'Be Vietnam Pro',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '1.6',
  },
  labelCaps: {
    fontFamily: 'Be Vietnam Pro',
    fontSize: '12px',
    fontWeight: '700',
    lineHeight: '1.4',
    letterSpacing: '0.1em',
  },
} as const;

export const SPACING = {
  unit: '8px',
  margin_page: '24px',
  gutter_scrapbook: '16px',
  stack_overlap: '-12px',
} as const;

export const BORDER_RADIUS = {
  sm: '0.125rem',
  DEFAULT: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  full: '9999px',
} as const;

export const BRAND = {
  description: 'Scrapbook Tactile - A hybrid of physical mementos and digital convenience.',
  personality: ['Intimate', 'Romantic', 'Warm', 'Intentional', 'Emotional'],
  features: ['Tactile Skeuomorphism', 'Organic Imperfection', 'Textural Depth'],
} as const;

import React from 'react'
export type FontWeightTypes = '700' | '500' | '400'
export type FontSizeTypes =
  | '64px'
  | '52px'
  | '44px'
  | '32px'
  | '28px'
  | '20px'
  | '16px'
  | '14px'
  | '12px'
  | '11px'
  | '10px'
export type FontFamilyTypes = 'var(--ff-primary)' | 'var(--ff-secondary)'
export type TagTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

export interface TextProps extends React.ComponentProps<'text'> {
  tag: TagTypes
  fontSize?: FontSizeTypes
  fontWeight?: FontWeightTypes
  color?: string
  fontFamily?: FontFamilyTypes
  children: React.ReactNode
}

import React from 'react'

export const tagNamesByType = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subHeading1: 'h4',
  subHeading2: 'h5',
  subHeading3: 'h6',
  paragraph1: 'p',
  paragraph2: 'p',
  label1: 'p',
  label2: 'p',
  label3: 'p'
}
export type weightTypes = 'bold' | 'medium' | 'regular'

export type typeTypes =
  | 'subHeading1'
  | 'subHeading2'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'paragraph1'
  | 'paragraph2'
  | 'label1'
  | 'label2'
  | 'label3'

export interface TextProps extends React.ComponentProps<'text'> {
  type: typeTypes
  tagName?: string
  weight?: weightTypes
  children: React.ReactNode
}

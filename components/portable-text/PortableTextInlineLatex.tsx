'use client'

import { type PortableTextComponentProps } from '@portabletext/react'
import { LatexPreview, type LatexPreviewProps } from 'sanity-plugin-latex-input'

export function PortableTextInlineLatex({
  value,
}: PortableTextComponentProps<{
  _key: string
  _type: string
  body?: string
}>) {
  const _child: LatexPreviewProps = {
    body: value.body?.toString() ?? '',
    layout: 'inline',
  }
  return LatexPreview(_child)
}
import { Card } from '@sanity/ui'
import { type PreviewProps } from 'sanity'

type TweetProps = PreviewProps & {
  url: string | undefined
}

export function OtherImagePreview(props: TweetProps) {
  if (!props.url) {
    return <Card padding={4}>Missing Image URL</Card>
  }

  return (
    <Card>
      <Card>
        <img src={props.url} alt="Image Preview" />
      </Card>
    </Card>
  )
}
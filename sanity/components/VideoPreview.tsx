import { Card } from '@sanity/ui'
import { type PreviewProps } from 'sanity'

type TweetProps = PreviewProps & {
  url: string | undefined
  source: string
  title?: string | undefined
}

export function VideoPreview(props: TweetProps) {
  if (!props.url) {
    return <Card padding={4}>Missing Video URL</Card>
  }

  return (
    <div style={{ position: 'relative', paddingBottom: '56%' }}>
      <iframe
        style={{
          height: '100%',
          width: '100%',
          border: 0,
          maxWidth: '100%',
          position: 'absolute',
        }}
        src={
          props.source === 'bilibili' ? `${props.url}&autoplay=0` : props.url
        }
        title={props.title}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}
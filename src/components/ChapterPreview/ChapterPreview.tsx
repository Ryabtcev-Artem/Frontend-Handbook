import './ChapterPreview.scss'

type ChapterPreviewProps = {
  title: string,
  description: string,
}
export default function ChapterPreview(props: ChapterPreviewProps) {
  const {title,description} = props

  return (
    <div
      className="chapter-preview container"
    >
      <h2 className={'chapter-preview__title'}>{title}</h2>
      <p className={'chapter-preview__description'}>{description}</p>
    </div>
  )
}
import { NodeViewWrapper,NodeViewContent } from '@tiptap/react'

export default function YouTubeComponent(props) {
  return (
    <NodeViewWrapper>
      <div className="youtube-embed">
        <iframe src={props.node.attrs.src} width="420" height="315" />
      </div>
    </NodeViewWrapper>  
  )
}
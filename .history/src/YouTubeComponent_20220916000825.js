import { NodeViewWrapper,NodeViewContent } from '@tiptap/react'

export default function YouTubeComponent(props) {
  return (
    <NodeViewWrapper className="react-component-with-content">
      <div className="youtube-embed">
        <iframe src={props.node.attrs.src} width="420" height="315" />
      </div>
    </NodeViewWrapper>  
  )
}
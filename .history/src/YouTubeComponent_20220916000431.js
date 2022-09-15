import { NodeViewWrapper,NodeViewContent } from '@tiptap/react'

export default function YouTubeComponent() {
  <NodeViewWrapper className="react-component-with-content">
    <div className="youtube-embed">
      <iframe src='https://www.youtube.com/embed/GVEouiQakO8' width="420" height="315" />
    </div>
  </NodeViewWrapper>
}
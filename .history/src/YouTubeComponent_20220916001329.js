import { NodeViewWrapper,NodeViewContent } from '@tiptap/react'
import { useState } from 'react'

export default function YouTubeComponent(props) {

  const [urlInput, setUrlInput] = useState(null)

  return (    
    <NodeViewWrapper>
      <input 
        type='text' 
        onChange={(e) => {
          const tempInput = e.target.value
          setUrlInput(tempInput)
          if(!!tempInput) {
            props.updateAttribute({src: tempInput})
          }
        }} 
      />
      <div className="youtube-embed">
        <iframe src={props.node.attrs.src} width="420" height="315" />
      </div>
    </NodeViewWrapper>     
  )
}
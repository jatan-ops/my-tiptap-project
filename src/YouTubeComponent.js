import { NodeViewWrapper,NodeViewContent } from '@tiptap/react'
import { useState } from 'react'

export default function YouTubeComponent(props) {

  const [urlInput, setUrlInput] = useState(props.node.attrs.src)

  return (    
    <NodeViewWrapper>
      <input 
        type='text' 
        value={urlInput}
        onChange={(e) => {
          const tempInput = e.target.value
          setUrlInput(tempInput)
          props.updateAttributes({src: tempInput})          
        }} 
      />
      <div className="youtube-embed">
        <iframe 
          src={urlInput} 
          width="420" 
          height="315" 
        />
      </div>
    </NodeViewWrapper>     
  )
}
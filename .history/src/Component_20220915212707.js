import { NodeViewWrapper } from '@tiptap/react'
import React from 'react'

export default props => {
  const increase = () => {
    props.updateAttributes({
      count: props.node.attrs.count + 1
    })
  }

  return (
    <NodeViewWrapper className="react-component-with-content">
      <span className="label" contentEditable={false}>React Component</span>

      <NodeViewContent className="content" />
    </NodeViewWrapper>
  )
}
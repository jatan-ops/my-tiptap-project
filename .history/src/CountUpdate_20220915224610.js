import { mergeAttributes, Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'

import Component from './Component.js'

export default Node.create({
  name: 'countUpdate',

  group: 'block',

  content: 'inline*',

  parseHTML() {
    return [
      {
        tag: 'react-component',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['react-component', mergeAttributes(HTMLAttributes),0]
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component)
  },
})
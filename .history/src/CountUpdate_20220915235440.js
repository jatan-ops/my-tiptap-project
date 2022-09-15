import { mergeAttributes, Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'

import CountUpdateComponent from './CountUpdateComponent'

const CountUpdate = Node.create({
  name: 'countUpdate',

  group: 'block',

  atom: true,

  addAttributes() {
    return {
      count: {
        default: 0,
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'count-update',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['jatan', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return ReactNodeViewRenderer(CountUpdateComponent)
  },
})

export default CountUpdate
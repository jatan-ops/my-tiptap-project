import { mergeAttributes, Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'

import CountUpdateComponent from './CountUpdateComponent'

const CountUpdate = Node.create({
  name: 'youtube-url',

  group: 'block',

  addAttributes() {
    return {
      src: {
        default: null
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div.youtube-embed iframe',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['count-update', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return ReactNodeViewRenderer(CountUpdateComponent)
  },
})

export default CountUpdate
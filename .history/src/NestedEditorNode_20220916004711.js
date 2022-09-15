import { mergeAttributes, Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'

import NestedEditorComponent from './NestedEditorComponent'

const CountUpdate = Node.create({
  name: 'nestedEditor',

  group: 'block',

  addAttributes() {
    return {
      editorId: {
        default: null
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div.nestedEditor',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return ReactNodeViewRenderer(NestedEditorComponent)
  },
})

export default CountUpdate
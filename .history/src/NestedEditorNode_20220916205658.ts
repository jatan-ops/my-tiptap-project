import { mergeAttributes, Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'

import NestedEditorComponent from './NestedEditorComponent'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    nestedEditor: {      
      setNestedEditor: (any) => ReturnType,
    }
  }
}

const NestedEditorNode = Node.create({
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

  addCommands() {
    return {
      setNestedEditor: any => ({ commands }) => {

        return commands.insertContent({
          type: this.name,
          attrs: {editorId: null}
        })
      },
    }
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return ReactNodeViewRenderer(NestedEditorComponent)
  },
})

export default NestedEditorNode
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

const initialData = {
  "type":'doc',
  "content": [
    {
      "type":"paragraph",
      "content": [
        {
          "type": "text", 
          "text": ""
        }
      ]
    }
  ]
}

const NestedEditorNode = Node.create({
  name: 'nestedEditor',

  group: 'block',

  addAttributes() {
    return {
      editorContent: {
        default: [initialData, initialData]
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
          attrs: {editorContent: [initialData, initialData]}
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
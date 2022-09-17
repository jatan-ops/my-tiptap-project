import { mergeAttributes, Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'

import ThreeColumnNestedComponent from './ThreeColumnNestedComponent'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    threeColumns: {      
      setThreeColumns: (any) => ReturnType,
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
  name: 'threeColumns',

  group: 'block',

  addAttributes() {
    return {
      editorContent: {
        default: [JSON.stringify(initialData), JSON.stringify(initialData),JSON.stringify(initialData)]
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
      setThreeColumns: any => ({ commands }) => {

        return commands.insertContent({
          type: this.name,
          attrs: {editorContent: [JSON.stringify(initialData), JSON.stringify(initialData),JSON.stringify(initialData)]}
        })
      },
    }
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return ReactNodeViewRenderer(ThreeColumnNestedComponent)
  },
})

export default NestedEditorNode
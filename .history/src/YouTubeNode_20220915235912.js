import { mergeAttributes, Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'

import YouTubeComponent from './YouTubeComponent'

const CountUpdate = Node.create({
  name: 'youtube',

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
    return ['youtube-embed', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return ReactNodeViewRenderer(YouTubeComponent)
  },
})

export default CountUpdate
import { mergeAttributes, Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'

import YouTubeComponent from './YouTubeComponent'

const CountUpdate = Node.create({
  name: 'youtube',

  group: 'block',

  addAttributes() {
    return {
      src: {
        default: ''
      },
    }
  },

  addCommands() {
    return {
      setYoutubeVideo: () => ({ commands }) => {

        return commands.insertContent({
          type: this.name,
          attrs: {src: ''}
        })
      }
    }
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return ReactNodeViewRenderer(YouTubeComponent)
  },
})

export default CountUpdate
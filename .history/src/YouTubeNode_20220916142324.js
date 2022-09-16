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

  // addCommands() {
  //   return {
  //     setYoutubeVideo: options => ({ commands }) => {
      
  //       return commands.insertContent({
  //         type: this.name,
  //       })
  //     }
  //   }
  // },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return ReactNodeViewRenderer(YouTubeComponent)
  },
})

export default CountUpdate
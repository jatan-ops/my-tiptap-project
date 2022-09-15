import './styles.scss'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './Menubar'

import EditableBlock from './Extension'
import CountUpdate from './CountUpdate'
import YouTubeNode from './YouTubeNode'
import NestedEditorNode from './NestedEditorNode' 

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      EditableBlock,
      CountUpdate,
      YouTubeNode,
      NestedEditorNode
    ],
    content: `<p>
    This is still the text editor you’re used to, but enriched with node views.
  </p>
  <react-component>
    <p>This is editable.</p>
  </react-component>
  <count-update></count-update>
  <p>
    Did you see that? That’s a React component. We are really living in the future.
  </p>
  <div class="nestedEditor">
    <p>This is editable.</p>
  </div>
  <div class="youtube-embed">
    <iframe />
  </div>
  `,
  })

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  )
}

export default Tiptap
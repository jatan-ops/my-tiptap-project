import './styles.scss'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './Menubar'

import ReactComponent from './Extension'
import CountUpdate from './CountUpdate'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      ReactComponent,
      CountUpdate
    ],
    content: `<p>
    This is still the text editor you’re used to, but enriched with node views.
  </p>
  <react-component>
    <p>This is editable.</p>
  </react-component>
  // <count-update count="0"></count-update>
  <p>
    Did you see that? That’s a React component. We are really living in the future.
  </p>`,
  })

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  )
}

export default Tiptap
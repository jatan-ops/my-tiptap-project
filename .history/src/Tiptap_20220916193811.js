import './styles.scss'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './Menubar'

import EditableBlock from './Extension'
import CountUpdate from './CountUpdate'
import YouTubeNode from './YouTubeNode.ts'
import NestedEditorNode from './NestedEditorNode.ts' 

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      EditableBlock,
      CountUpdate,
      YouTubeNode,
      NestedEditorNode
    ],
    content: {
      "type": "doc",
      "content": [
        {
          "type": "paragraph",
          "content": [
            {
              "type": "text",
              "text": "Wow, this editor instance exports its content as JSON."
            }
          ]
        }
      ]
    }
  })

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <button
        onClick={() => {
          const json = editor.getJSON()
          console.log('tiptap json: ', json)
          localStorage.setItem('tiptap-json',json)
        }}
      >
        save
      </button>
    </>
  )
}

export default Tiptap
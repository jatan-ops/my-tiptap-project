import './styles.scss'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './Menubar'

import EditableBlock from './Extension'
import CountUpdate from './CountUpdate'
import YouTubeNode from './YouTubeNode.ts'
import NestedEditorNode from './NestedEditorNode.ts' 

const Tiptap = () => {

  const initializeData = localStorage.getItem('tiptap-json')

  if(initializeData === null) {
    initializeData = {
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
  } else {
    initializeData = JSON.parse(initializeData)
  }
  

  const editor = useEditor({
    extensions: [
      StarterKit,
      EditableBlock,
      CountUpdate,
      YouTubeNode,
      NestedEditorNode
    ],
    content: initializeData
  })

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <button
        onClick={() => {
          const json = editor.getJSON()
          console.log('tiptap json: ', json)
          localStorage.setItem('tiptap-json',JSON.stringify(json))
        }}
      >
        save
      </button>
    </>
  )
}

export default Tiptap
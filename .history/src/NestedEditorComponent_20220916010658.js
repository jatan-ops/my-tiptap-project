import { NodeViewWrapper,NodeViewContent } from '@tiptap/react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import EditableBlock from './Extension'
import CountUpdate from './CountUpdate'
import YouTubeNode from './YouTubeNode'

import MenuBar from './Menubar'

export default function NestedEditorComponent() {

  const editor1 = useEditor({
    extensions: [
      StarterKit,
      EditableBlock,
      CountUpdate,
      YouTubeNode
    ],
    content: `<p>
    This is nested editor
  </p>`
  })

  const editor2 = useEditor({
    extensions: [
      StarterKit,
      EditableBlock,
      CountUpdate,
      YouTubeNode
    ],
    content: `<p>
    This is third editor
  </p>`
  })

  return(
    <NodeViewWrapper>
      <div className="nestedEditor">
        <MenuBar editor={editor1} />
        <EditorContent editor={editor1} />
        <MenuBar editor={editor2} />
        <EditorContent editor={editor2} />
      </div>
    </NodeViewWrapper>   
  )
}
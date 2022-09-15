import { NodeViewWrapper,NodeViewContent } from '@tiptap/react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import EditableBlock from './Extension'
import CountUpdate from './CountUpdate'
import YouTubeNode from './YouTubeNode'

import MenuBar from './Menubar'

export default function NestedEditorComponent() {

  const editor = useEditor({
    extensions: [
      StarterKit,
      EditableBlock,
      CountUpdate,
      YouTubeNode
    ],
    content: `<p>
    This is nested editor
  </p>  
  `,
  })

  return(
    <NodeViewWrapper>
      <div className="nestedEditor">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </NodeViewWrapper>   
  )
}
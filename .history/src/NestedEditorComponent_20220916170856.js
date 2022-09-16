import { NodeViewWrapper,NodeViewContent } from '@tiptap/react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import EditableBlock from './Extension'
import CountUpdate from './CountUpdate'
import YouTubeNode from './YouTubeNode.ts'
import NestedEditorNode from './NestedEditorNode.ts' 

import MenuBar from './Menubar'

export default function NestedEditorComponent() {

  const editor1 = useEditor({
    extensions: [
      StarterKit,
      EditableBlock,
      CountUpdate,
      YouTubeNode,
      NestedEditorNode
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
      YouTubeNode,
      NestedEditorNode
    ],
    content: `<p>
    This is third editor
  </p>`
  })

  return(
    <NodeViewWrapper>
      <div className="nestedEditor" style={{display:'flex'}}>
        <div>
          <MenuBar editor={editor1} />
          <EditorContent editor={editor1} />
        </div>
        <div>
          <MenuBar editor={editor2} />
          <EditorContent editor={editor2} />
        </div>
      </div>
    </NodeViewWrapper>   
  )
}
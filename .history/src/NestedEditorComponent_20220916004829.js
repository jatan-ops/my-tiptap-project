import { NodeViewWrapper,NodeViewContent } from '@tiptap/react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

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
        <EditorContent editor={editor} />
      </div>
    </NodeViewWrapper>   
  )
}
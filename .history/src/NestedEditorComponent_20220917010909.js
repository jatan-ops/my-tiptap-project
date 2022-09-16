import { NodeViewWrapper,NodeViewContent } from '@tiptap/react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import EditableBlock from './Extension'
import CountUpdate from './CountUpdate'
import YouTubeNode from './YouTubeNode.ts'
import NestedEditorNode from './NestedEditorNode.ts' 

import MenuBar from './Menubar'

export default function NestedEditorComponent(props) {

  const onUpdateEditor1 = () => {
   const temp = props.node.attrs.editorContent
   temp[0] = JSON.stringify(editor1.getJSON() ) 
   props.updateAttributes({
    editorContent: temp
   })
  }

  const onUpdateEditor2 = () => {
    const temp = props.node.attrs.editorContent
    temp[1] = JSON.stringify(editor2.getJSON() ) 
    props.updateAttributes({
      editorContent: temp
    })
  }

  const editor1 = useEditor({
    extensions: [
      StarterKit,
      EditableBlock,
      CountUpdate,
      YouTubeNode,
      NestedEditorNode
    ],
    content: JSON.parse(props.node.attrs.editorContent[0])
  })

  editor1.on('update',onUpdateEditor1)

  const editor2 = useEditor({
    extensions: [
      StarterKit,
      EditableBlock,
      CountUpdate,
      YouTubeNode,
      NestedEditorNode
    ],
    content: JSON.stringify(props.node.attrs.editorContent[1])
  })

  editor2.on('update',onUpdateEditor2)

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
import { NodeViewWrapper,NodeViewContent } from '@tiptap/react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import EditableBlock from './Extension'
import CountUpdate from './CountUpdate'
import YouTubeNode from './YouTubeNode.js'
import NestedEditorNode from './NestedEditorNode.ts' 
import ThreeColumnNested from './ThreeColumnNested.ts'

import MenuBar from './Menubar'

export default function ThreeColumnNestedComponent(props) {

  const editor1 = useEditor({
    extensions: [
      StarterKit,
      EditableBlock,
      CountUpdate,
      YouTubeNode,
      NestedEditorNode,
      ThreeColumnNested
    ],
    content: JSON.parse(props.node.attrs.editorContent[0]),
    onUpdate:({ editor }) => {
      const temp = props.node.attrs.editorContent
      temp[0] = JSON.stringify(editor.getJSON()) 
      props.updateAttributes({
        editorContent: temp
      })
    },
  })

  const editor2 = useEditor({
    extensions: [
      StarterKit,
      EditableBlock,
      CountUpdate,
      YouTubeNode,
      NestedEditorNode,
      ThreeColumnNested
    ],
    content: JSON.parse(props.node.attrs.editorContent[1]),
    onUpdate:({ editor }) => {
      const temp = props.node.attrs.editorContent
      temp[1] = JSON.stringify(editor.getJSON()) 
      props.updateAttributes({
        editorContent: temp
      })
    },
  })

  const editor3 = useEditor({
    extensions: [
      StarterKit,
      EditableBlock,
      CountUpdate,
      YouTubeNode,
      NestedEditorNode,
      ThreeColumnNested
    ],
    content: JSON.parse(props.node.attrs.editorContent[2]),
    onUpdate:({ editor }) => {
      const temp = props.node.attrs.editorContent
      temp[2] = JSON.stringify(editor.getJSON()) 
      props.updateAttributes({
        editorContent: temp
      })
    },
  })

  return (
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
        <div>
          <MenuBar editor={editor3} />
          <EditorContent editor={editor3} />
        </div>
      </div>
    </NodeViewWrapper>   
  )
}
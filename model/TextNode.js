import DocumentNode from './DocumentNode'

/**
  A base class for all text-ish nodes, such as Paragraphs, Headings,
  Prerendered, etc.
*/
class TextNode extends DocumentNode {

  getTextPath() {
    // TODO: deprecate this
    // console.warn('DEPRECATED: use node.getPath()')
    return this.getPath()
  }

  getPath() {
    return [this.id, 'content']
  }

  getText() {
    return this.content
  }

  isEmpty() {
    return !this.content
  }

  getLength() {
    return this.content.length
  }

  getAnnotations() {
    return this.getDocument().getIndex('annotations').get(this.getPath())
  }

}

TextNode.isText = true

TextNode.schema = {
  type: "text",
  content: "text",
  direction: { type: "string", optional: true },
  textAlign: { type: "string", default: 'left' }
}

export default TextNode

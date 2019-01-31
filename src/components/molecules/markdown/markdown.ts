import 'github-markdown-css/github-markdown.css'
import highlight from 'highlight.js'
import 'highlight.js/styles/github.css'
import marked, { Renderer } from 'marked'
import Vue, { CreateElement, VNode } from 'vue'

function toMarkdown(source: string) {
  const markedOptions = {
    langPrefix: 'hljs language-',
    renderer: new Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: (code: string) => highlight.highlightAuto(code).value,
  }

  return marked(source, markedOptions)
}

export default Vue.extend({
  name: 'Markdown',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    source: {
      type: String,
      default: '',
    },
  },
  render(h: CreateElement): VNode {
    const options = {
      class: {
        'markdown-body': true,
      },
      domProps: {
        innerHTML: toMarkdown(this.source),
      },
    }
    return h(this.tag, options)
  },
})

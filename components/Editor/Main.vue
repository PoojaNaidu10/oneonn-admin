<template>
	<div class="editor" v-if="editor">
		<EditorMenuBar class="editor__header" :editor="editor" />
		<EditorContent class="editor__content" :editor="editor" />
	</div>
</template>

<script>
import StarterKit from '@tiptap/starter-kit'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Highlight from '@tiptap/extension-highlight'
import { Editor, EditorContent } from '@tiptap/vue-2'

export default {
	data: () => ({ editor: null, content: '' }),
	components: { EditorContent },
	props: { value: { type: String, default: '' } },
	watch: {
		value(value) {
			// HTML
			const isSame = this.editor.getHTML() === value
			// If data is same don't change
			if (isSame) {
				return
			}
			// Update the value
			this.editor.commands.setContent(value, false)
		},
	},
	mounted() {
		this.editor = new Editor({
			content: this.value,
			onUpdate: () => {
				// HTML
				this.$emit('input', this.editor.getHTML())
			},
			extensions: [StarterKit.configure(), Highlight, TaskList, TaskItem],
		})
	},
	beforeDestroy() {
		this.editor.destroy()
	},
}
</script>

<style scoped>
.editor {
	display: flex;
	color: #0d0d0d;
	max-height: 26rem;
	border-radius: 0.75rem;
	flex-direction: column;
	background-color: #fff;
	border: 1px solid #0d0d0d;
}
.editor__header {
	display: flex;
	flex: 0 0 auto;
	flex-wrap: wrap;
	padding: 0.25rem;
	align-items: center;
	background: #dcfdf1;
	border-top-left-radius: 0.75rem;
	border-top-right-radius: 0.75rem;
	border-bottom: 3px solid #0d0d0d;
}
.editor__content {
	padding: 1rem;
	flex: 1 1 auto;
	overflow-y: auto;
	overflow-x: hidden;
	-webkit-overflow-scrolling: touch;
}
.editor__footer {
	display: flex;
	flex: 0 0 auto;
	flex-wrap: wrap;
	font-size: 12px;
	font-weight: 600;
	color: #0d0d0d;
	align-items: center;
	white-space: nowrap;
	padding: 0.25rem 0.75rem;
	justify-content: space-between;
	border-top: 3px solid #0d0d0d;
}
.editor__status {
	display: flex;
	border-radius: 5px;
	align-items: center;
}
.editor__status::before {
	content: ' ';
	flex: 0 0 auto;
	width: 0.5rem;
	height: 0.5rem;
	border-radius: 50%;
	margin-right: 0.5rem;
	display: inline-block;
	background: rgba(13, 13, 13, 0.5);
}
.editor__status--connecting::before {
	background: #616161;
}
.editor__status--connected::before {
	background: #b9f18d;
}
.editor__name button {
	border: none;
	font: inherit;
	font-size: 12px;
	background: none;
	font-weight: 600;
	color: #0d0d0d;
	border-radius: 0.4rem;
	padding: 0.25rem 0.5rem;
}
.editor__name button:hover {
	color: #fff;
	background-color: #0d0d0d;
}
</style>

import Vue, { VNodeData } from 'vue'

type CSSClass = (string | string[] | {
	[key: string]: any
})

type Style = VNodeData['style']

export { Component, Prop, Watch, Ref } from 'vue-property-decorator'
export type { VNode } from 'vue'

export class VueComponent<P = {}> extends Vue {
	public $props!: P & {
		key?: string | number
		class?: CSSClass | CSSClass[]
		style?: Style
		ref?: VNodeData['ref']
	}
}
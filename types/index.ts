import Vue, { VNodeData } from 'vue'
import { SLDP } from './sldp.min.js'

interface InitParam {
	container: string
	stream_url: number
	initial_resolution: '240p' | '580p' // TODO:  а какие бывают?
	buffering: number
	autoplay: boolean
	height: number | 'parent'
	width: number | 'parent'
}

export interface ISLDP {
	init(param: InitParam): void
	destroy(cd?: () => void): void
}

type CSSClass = (string | string[] | {
	[key: string]: any
})

type Style = VNodeData['style']

export const SLDPModule: ISLDP = SLDP
export { Component, Prop, Watch, Ref } from 'vue-property-decorator'
export type { VNode } from 'vue'


// TODO: попробуй воткнуть сюда AntDesign чтобы были пропсы в JSX для его компонентов
export class VueComponent<P = {}> extends Vue {
	public $props!: P & {
		key?: string | number
		class?: CSSClass | CSSClass[]
		style?: Style
		ref?: VNodeData['ref']
	}
}
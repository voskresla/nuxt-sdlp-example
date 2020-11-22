import { Component, VueComponent, Ref } from '~/types'
import { SLDPModule, ISLDP } from '~/types'

import styles from './live.css?module' 
interface LiveRouteParams {
	liveID?: number | null
}

@Component({
	asyncData(context) {
		console.log(context)
		const { liveID } = context.query as LiveRouteParams
		
		return { liveID: liveID }
	}
})
export default class Live extends VueComponent {
	@Ref() SLDPContainer?: HTMLElement

	liveID: LiveRouteParams['liveID'] = null
	SLDPPLayerID = 'SLDPPlayerID'
	SLDPPLayer: ISLDP | null = null

	SLDPInitPlayer(el: HTMLElement) {
		if (!this.liveID) return

		const streamUrl = `ws://40.91.239.87:8081/live/${this.liveID}`

		this.SLDPPLayer = SLDPModule.init({
			container: el.getAttribute('id')!,
			stream_url: streamUrl,
        	initial_resolution: '240p',
        	buffering: 500,
        	autoplay: true,
        	height: 'parent',
			width: 'parent',
			// fullscreen: true
		})
	}

	SLDPDestroyPlayer() {
		this.SLDPPLayer?.destroy(() => console.log('destroy'))
	}

	mounted() {
		if (this.SLDPContainer) this.SLDPInitPlayer(this.SLDPContainer)
	}

	destroyed() {
		this.SLDPDestroyPlayer()
	}

	render() {
		return (
			<div
				class={styles.playerWrapper}
				ref='SLDPContainer'
				id='SLDPPlayerID'
			/>
		)
	}
}
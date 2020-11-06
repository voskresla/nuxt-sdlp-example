import { Component, VueComponent, Ref } from '~/types'
// TODO: куда положить правильно? В секцию nuxt.config? В /asset ?
import { SLDPModule } from '~/types'

interface LiveParams {
	liveID?: number | null
}

@Component
export default class Live extends VueComponent {
	@Ref() SLDPContainer?: HTMLElement

	liveID: LiveParams['liveID'] = null
	SLDPPLayerID = 'SLDPPlayerID'

	SLDPInitPlayer(el: HTMLElement) {
		SLDPModule.init({
			container: el.getAttribute('id')!,
        	stream_url: this.liveID === 1000 ? 'wss://vd1.wmspanel.com/video_demo/stream' : 'ws://40.91.239.87:8081/live/mts',
        	initial_resolution: '240p',
        	buffering: 500,
        	autoplay: true,
        	height: 480,
        	width: 424
		})
	}

	SLDPDestroyPlayer() {
		SLDPModule.destroy()
	}

	created() {
		const { liveID } = this.$route.params as LiveParams
		
		this.liveID = liveID
	}

	mounted() {
		if (this.SLDPContainer) this.SLDPInitPlayer(this.SLDPContainer)
	}

	beforeDestroy() {
		this.SLDPDestroyPlayer()
	}

	render() {
		console.log(SLDPModule)
		return (
			<div>
				Live section for {`${this.liveID}`}

				<div
					ref='SLDPContainer'
					id='SLDPPlayerID'
				>
					sldpContainer
				</div>
			</div>
		)
	}
}
import { Component, VueComponent, Ref } from '~/types'
// TODO: куда положить правильно? В секцию nuxt.config? В /asset ?
import { SLDPModule } from '~/types'

interface LiveRouteParams {
	liveID?: number | null
}

@Component({
	middleware(context) {
		console.log('context', context)
	}
})
export default class Live extends VueComponent {
	@Ref() SLDPContainer?: HTMLElement

	liveID: LiveRouteParams['liveID'] = null
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
		console.log('route params', this.$route)
		const { liveID } = this.$route.params as LiveRouteParams
		
		this.liveID = liveID
	}

	mounted() {
		if (this.SLDPContainer) this.SLDPInitPlayer(this.SLDPContainer)
	}

	beforeDestroy() {
		this.SLDPDestroyPlayer()
	}

	render() {
		return (
			<div>
				<p>Трансляция для {`${this.liveID}`}</p>

				<div
					ref='SLDPContainer'
					id='SLDPPlayerID'
				>
				</div>
			</div>
		)
	}
}
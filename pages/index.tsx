import { VueComponent, Component } from '~/types'

@Component
export default class Index extends VueComponent {
	render() {
		return (
			<div>
				Hi from tsx...
					
				<nuxt-link
					to={{
						name: 'live',
						params: {
							liveID: 1000
						}
					}}
				>
					To 1000
				</nuxt-link>
			</div>
		)
	}
} 
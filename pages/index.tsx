import { VueComponent, Component } from '~/types'

@Component
export default class Index extends VueComponent {
	render() {
		return (
			<div>
				Hi from tsx...
			</div>
		)
	}
} 
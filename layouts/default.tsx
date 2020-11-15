import { VueComponent, Component } from '~/types'
import { Layout } from 'ant-design-vue'

const { Header, Footer,  Content } = Layout

import styles from './default.css?module' 

@Component
export default class MainLayout extends VueComponent {
	render() {
		return (
			<Layout
				class={styles.layout}
			>
				{/* <Header>
					Freedom 4x4 SLDP
				</Header> */}
				<Content>
					<nuxt />
				</Content>
				{/* <Footer>
					Footer
				</Footer> */}
			</Layout>
		)
	}
}
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
				<Content
					class={styles.main}
				>
					<nuxt />
				</Content>
			</Layout>
		)
	}
}
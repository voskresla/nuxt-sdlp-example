import { VueComponent, Component, Prop } from '~/types'
import { Form, Input, Button } from 'ant-design-vue'
// import { WrappedFormUtils } from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css';
@Component
export class Index extends VueComponent {
	@Prop() form!: Form['form']

	// form = this.$form.createForm(this, {name: 'xxx'})

	handleSubmit(e: Event) {
			e.preventDefault()
			this.form.validateFields((err, values) => {
			  if (!err) {
				console.log('Received values of form: ', values);
			  }
			});
	}

	render() {
		return (
			<div>
				Hi from tsx...
					
				<Form
					form={this.form}
					onSubmit={this.handleSubmit}
				>
					<Form.Item>
						<Input
							placeholder='placeholder'
							v-decorator={[
								'login',
								{rules: [{required: true, message: 'Логин обязателен'}]}
							]}
						/>
					</Form.Item>
					<Button
						type='primary'
						htmlType='submit'
					>
						Log In
					</Button>
				</Form>

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

export default Form.create({
	name: 'testForm',
	onFieldsChange: () => console.log('change'),
	onValuesChange: () => console.log('cahnge 2')
})(Index)
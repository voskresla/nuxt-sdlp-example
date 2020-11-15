import { VueComponent, Component, Prop } from '~/types'
import { Form, Input, Button } from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css';

enum FormField {
	login = 'login',
	liveID = 'liveID'
}

type FormFieldValue = { [key in FormField]: string}
@Component
export class Index extends VueComponent {
	@Prop() form!: Form['form']

	isLoggedIn = false

	handleSubmit(e: Event) {
		e.preventDefault()
		this.form.validateFields((err, values) => {
			if (!err) {
				const { liveID, login } = values as FormFieldValue
				console.log('liveID', liveID)
	
				this.$router.push({
					name: 'live',
					path: '/live',
					params: {
						liveID
					}
				})
				
				return
			}
		});
	}

	render() {
		return (
			<div>
				<Form
					form={this.form}
					onSubmit={this.handleSubmit}
				>
					<Form.Item>
						<Input
							placeholder='Имя'
							v-decorator={[
								FormField.login,
								{ rules: [{ required: true, message: 'Логин обязателен' }] }
							]}
						/>
					</Form.Item>
					<Form.Item>
						<Input
							placeholder='Код трансляции'
							v-decorator={[
								FormField.liveID,
								{ rules: [{ required: true, message: ' Код трансляции обязателен' }] }
							]}
						/>
					</Form.Item>
					<Button
						type='primary'
						htmlType='submit'
					>
						Войти
					</Button>
				</Form>
			</div>
		)
	}
} 

export default Form.create({
	name: 'loginForm',
	// onFieldsChange: () => console.log('change'),
	// onValuesChange: () => console.log('cahnge 2')
})(Index)
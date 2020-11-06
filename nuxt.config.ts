import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	ssr: false,

	buildModules: ['@nuxt/typescript-build'],

	// modern: 'client',

	build: {
		additionalExtensions: ['ts', 'tsx'],
	}

}

export default config
<template>
	<div class="module-header">

		{{title}}

		<div class="slot">
			<slot></slot>
		</div>

	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		name: 'ModuleHeader',
		props: {
			title: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style scoped>
	@import '../assets/stylesheets/components/module-header.css';
</style>

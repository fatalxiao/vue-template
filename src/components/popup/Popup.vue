<template>
	<div class="popup"
	     :disabled="disabled">

		<div class="triangle"></div>

		<div class="content">
			<slot></slot>
		</div>

	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		name: 'Popup',
		props: {
			disabled: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style scoped>
	@import '../../assets/stylesheets/components/popup/popup.css';
	@import '../../assets/stylesheets/components/popup/popup-dark.css';
	@import '../../assets/stylesheets/components/popup/popup-light.css';
</style>

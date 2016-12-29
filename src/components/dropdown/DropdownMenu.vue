<template>
	<div class="dropdown-menu"
	     :class="{'activated': isActivated}">
		<slot></slot>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		name: 'DropdownMenu',
		props: {
			isActivated: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style scoped>
	@import '../../assets/stylesheets/components/dropdown/dropdown-menu.css';
</style>

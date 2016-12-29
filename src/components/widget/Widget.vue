<template>
	<div class="widget">
		<slot></slot>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		name: 'Widget'
	}
</script>

<style scoped>
	@import "../../assets/stylesheets/components/widget/widget.css";
</style>

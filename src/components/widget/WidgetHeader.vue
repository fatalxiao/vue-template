<template>
	<div class="widget-header">

		<div class="title">{{title}}</div>

		<div class="others">
			<slot></slot>
		</div>

	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		name: 'WidgetHeader',
		props: {
			title: {
				type: String,
				default: 'title'
			}
		}
	}
</script>

<style scoped>
	@import "../../assets/stylesheets/components/widget/widget-header.css";
</style>

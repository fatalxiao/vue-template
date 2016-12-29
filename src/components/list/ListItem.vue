<template>
	<button class="list-item"
	        type="button"
	        :disabled="disabled || loading"
	        @click="clickHandle()">

		<i aria-hidden="true"
		   :class="icon"></i>

		<div>{{text}}</div>

		<slot></slot>

	</button>
</template>

<script type="text/ecmascript-6">
	export default {
		name: 'ListItem',
		props: {
			iconCls: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				default: ''
			},
			disabled: {
				type: Boolean,
				default: false
			},
			loading: {
				type: Boolean,
				default: false
			},
			click: Function
		},
		computed: {
			icon () {
				return this.loading ? 'fa fa-cog fa-spin fa-fw' : this.iconCls;
			}
		},
		methods: {
			clickHandle () {
				this.click && this.click();
			}
		}
	}
</script>

<style scoped>
	@import '../../assets/stylesheets/components/list/list-item/list-item.css';
	@import '../../assets/stylesheets/components/list/list-item/list-item-dark.css';
	@import '../../assets/stylesheets/components/list/list-item/list-item-light.css';
</style>

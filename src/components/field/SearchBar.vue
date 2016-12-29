<template>
	<div class="search-bar"
	     :class="{'focused': focused}">

		<input type="text"
		       :value="filterText"
		       @focus="focusHandle"
		       @blur="blurHandle"
		       @input="changeHandle"/>

		<i class="fa fa-times clear-button"
		   aria-hidden="true"
		   @click="clearText"
		   v-if="!isFilterTextEmpty"></i>

		<i class="fa fa-search"
		   aria-hidden="true"
		   v-if="isFilterTextEmpty"></i>

	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		name: 'SearchBar',
		props: {
			filterText: {
				type: String,
				default: ''
			},
			onChange: Function
		},
		data () {
			return {
				focused: false
			}
		},
		computed: {
			isFilterTextEmpty() {
				return !this.filterText;
			}
		},
		methods: {
			focusHandle () {
				this.focused = true;
			},
			blurHandle () {
				this.focused = false;
			},
			changeHandle (e) {
				this.onChange && this.onChange(e.target.value);
			},
			clearText(){
				this.onChange && this.onChange('');
			}
		}
	}
</script>

<style scoped>
	@import "../../assets/stylesheets/components/field/search-bar.css";
</style>

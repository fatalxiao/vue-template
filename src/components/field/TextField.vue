<template>
	<div class="text-field"
	     :class="{'password': isPassword}">

		<i class="text-field-icon"
		   :class="iconCls"
		   v-if="iconCls"
		   aria-hidden="true"></i>

		<input :type="inputType"
		       :name="name"
		       :placeholder="placeholder"
		       :value="value"
		       :disabled="disabled"
		       @input="change"
		       @keydown="keydownHandle"/>

		<i class="password-visible-icon"
		   :class="[passwordVisible ? 'fa fa-eye' : 'fa fa-eye-slash']"
		   aria-hidden="true"
		   v-if="isPassword"
		   @mousedown="togglePasswordVisible"></i>

	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		name: 'TextField',
		props: {
			type: {
				type: String,
				default: 'text'
			},
			name: {
				type: String,
				default: ''
			},
			placeholder: {
				type: String,
				default: ''
			},
			value: {
				type: String,
				default: ''
			},
			iconCls: {
				type: String,
				default: ''
			},
			disabled: {
				type: Boolean,
				default: false
			},
			change: Function,
			pressEnter: Function
		},
		data() {
			return {
				passwordVisible: false
			}
		},
		computed: {
			inputType() {
				if (this.type === 'password') {
					return this.passwordVisible ? 'text' : 'password';
				}
				return this.type;
			},
			isPassword() {
				return this.type === 'password';
			}
		},
		methods: {
			keydownHandle (e) {
				if (e.keyCode == 13) {
					this.pressEnter && this.pressEnter();
				}
			},
			togglePasswordVisible(e) {
				e.stopPropagation();
				this.passwordVisible = !this.passwordVisible;
			}
		}
	}
</script>

<style scoped>
	@import '../../assets/stylesheets/components/field/text-field.css';
</style>
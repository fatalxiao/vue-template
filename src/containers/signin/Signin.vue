<template>
	<div class="signin">

		<h1>Vue Template</h1>

		<SigninForm/>

		<SigninTheme/>

		<div class="copyright">
			Copyright &copy; 2016 Brand Co.,Ltd. All rights reserved.
		</div>

	</div>
</template>

<script type="text/ecmascript-6">

	import {mapGetters, mapActions} from 'vuex';

	import SigninForm from './SigninForm';
	import SigninTheme from './SigninTheme';

	export default {
		name: 'Signin',
		components: {
			SigninForm,
			SigninTheme
		}
	}

</script>

<style scoped>
	@import '../../assets/stylesheets/containers/signin/signin.css';
	@import '../../assets/stylesheets/containers/signin/signin-dark.css';
	@import '../../assets/stylesheets/containers/signin/signin-light.css';
</style>
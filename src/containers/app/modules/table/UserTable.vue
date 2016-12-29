<template>
	<div class="user-table">

		<ModuleHeader title="User Table">

		</ModuleHeader>

		<Widget>

			<WidgetHeader title="User Table">

				<i class="fa fa-refresh reload-button"
				   :class="{'fa-spin': isTableLoading}"
				   aria-hidden="true"
				   @click="loadTableData"></i>

				<SearchBar :filter-text="filterText"
				           :on-change="onFilterTextChange"/>

			</WidgetHeader>

			<SimpleTable :header="header"
			             :data="tableData"
			             :filterText="filterText"
			             :isLoading="isTableLoading"/>

		</Widget>

	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex';
	import * as types from '../../../../vuex/mutationTypes/TableMutationTypes';

	import ModuleHeader from '../../../../components/ModuleHeader';
	import Widget from '../../../../components/widget/Widget';
	import WidgetHeader from '../../../../components/widget/WidgetHeader';
	import SearchBar from '../../../../components/field/SearchBar';
	import SimpleTable from '../../../../components/table/SimpleTable';

	export default {
		name: 'UserTable',
		components: {
			ModuleHeader,
			Widget,
			WidgetHeader,
			SearchBar,
			SimpleTable
		},
		data () {
			return {
				filterText: '',
				header: [{
					col: 'id',
					title: 'ID'
				}, {
					col: 'firstName',
					title: 'First Name'
				}, {
					col: 'lastName',
					title: 'Last Name'
				}, {
					col: 'tel',
					title: 'Tel'
				}, {
					col: 'addr',
					title: 'Address'
				}]
			}
		},
		computed: {
			...mapGetters({
				tableData: 'tableData',
				getTableDataActionType: 'getTableDataActionType'
			}),
			isTableLoading() {
				return this.getTableDataActionType == types.GET_TABLE_DATA_REQUEST;
			}
		},
		methods: {
			...mapActions([
				'getTableData'
			]),
			loadTableData() {

				const token = sessionStorage.getItem('token');

				if (!token) {
					this.$router.replace('/');
				} else {
					this.getTableData({
						token
					});
				}

			},
			onFilterTextChange(filterText) {
				this.filterText = filterText;
			}
		},
		created () {
			this.loadTableData();
		}
	}
</script>

<style>
	@import '../../../../assets/stylesheets/containers/app/modules/table/user-table.css';
</style>

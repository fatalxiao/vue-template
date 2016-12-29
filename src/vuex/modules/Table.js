import * as types from '../mutationTypes/TableMutationTypes';

const state = {
	tableData: [],
	getTableDataActionType: ''
};

const mutations = {

	// 获取列表数据
	[types.GET_TABLE_DATA_REQUEST] (state) {
		state.tableData = [];
		state.getTableDataActionType = types.GET_TABLE_DATA_REQUEST;
	},
	[types.GET_TABLE_DATA_SUCCESS] (state, info) {
		state.tableData = info.response.data;
		state.getTableDataActionType = types.GET_TABLE_DATA_SUCCESS;
	},
	[types.GET_TABLE_DATA_FAILURE] (state, info) {
		state.tableData = [];
		state.getTableDataActionType = types.GET_TABLE_DATA_FAILURE;
	}

};

export default {
	state,
	mutations
};
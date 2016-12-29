import TableApi from '../../api/TableApi';
import * as types from '../mutationTypes/TableMutationTypes';

/**
 * 获取列表数据
 * @param commit
 * @param data
 */
export const getTableData = ({commit}, params) => {
	commit({
		type: types.GET_TABLE_DATA_REQUEST
	});
	TableApi.getTableData(params, response => {
		commit({
			type: types.GET_TABLE_DATA_SUCCESS,
			response
		});
		params.successCallback && params.successCallback(response);
	}, response => {
		commit({
			type: types.GET_TABLE_DATA_FAILURE,
			response
		});
		params.failureCallback && params.failureCallback(response);
	});
};
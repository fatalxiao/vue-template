export default {

	/**
	 * 获取列表数据
	 * @param data
	 * @param successCalllBack
	 * @param failureCallback
	 */
	getTableData (params, successCalllBack, failureCallback) {

		let data = [];

		for (let i = 0; i < 10000; i++) {
			data.push({
				id: '' + i,
				firstName: 'firstName' + i,
				lastName: 'lastName' + i,
				tel: 'tel' + i,
				addr: 'addr' + i
			});
		}

		setTimeout(()=> {

			if (params.token == 'admin') {
				successCalllBack({
					code: '2000',
					msg: '',
					data
				});
			} else {
				failureCallback({
					code: '4002',
					msg: 'Fetch error!'
				});
			}

		}, 2000);

	}

};
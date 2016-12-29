<template>

	<div class="simple-table"
	     :class="{'loading': isLoading}">

		<div class="loading-mask">
			<i aria-hidden="true"
			   class="fa fa-cog fa-spin"></i>
		</div>

		<div class="simple-table-header"
		     :class="{'scroll': filteredData.length >= 10}">
			<div class="header"
			     :style="headerStyle"
			     v-for="(item, index) in header"
			     :key="index">
				{{item.title}}
			</div>
		</div>

		<div class="simple-table-content"
		     @scroll="scrollHandle">
			<div class="simple-table-content-scroller"
			     :style="SimpleTableContentScrollerStyle">
				<simple-table-row v-for="(item, index) in finalData"
				                  :key="item.id"
				                  :data="item"
				                  :row-index="index"
				                  :start-index="startIndex"></simple-table-row>
			</div>
		</div>

		<div class="simple-table-footer">
			<div class="count">
				Total: {{data.length}}, Filtered: {{filteredData.length}}
			</div>
		</div>

	</div>

</template>

<script type="text/ecmascript-6">
	import SimpleTableRow from './SimpleTableRow';

	export default {
		name: 'SimpleTable',
		components: {
			SimpleTableRow
		},
		props: {
			header: {
				type: Array,
				default: []
			},
			data: {
				type: Array,
				default: []
			},
			filterText: {
				type: String,
				default: ''
			},
			isLoading: {
				type: Boolean,
				default: false
			}
		},
		data () {
			return {
				scrollTop: 0,
				stopIndex: 0
			}
		},
		computed: {
			headerStyle() {
				return {
					width: 100 / this.header.length + '%'
				};
			},
			SimpleTableContentScrollerStyle() {
				return {
					height: this.filteredData.length * 60 + 'px'
				};
			},
			filteredData () {
				if (!this.data instanceof Array || !this.filterText) {
					return this.data;
				}
				return this.data.filter(value => {
					for (let key in value) {
						if (value[key].toString().toUpperCase().includes(this.filterText.toString().toUpperCase())) {
							return true;
						}
					}
					return false;
				});
			},
			startIndex () {
				return Math.floor(this.scrollTop / 60);
			},
			stopIndex () {
				return this.startIndex + 10;
			},
			splitedData () {
				return this.filteredData.slice(this.startIndex, this.stopIndex + 1);
			},
			finalData () {
				return this.splitedData.map(item => this.header.map(col => item[col['col']]));
			}
		},
		methods: {
			scrollHandle(e) {
				this.scrollTop = e.target.scrollTop;
			}
		}
	}
</script>

<style scoped>
	@import "../../assets/stylesheets/components/table/simple-table/simple-table.css";
</style>

<template>
	<div class="row"
	     :class="rowClass"
	     :style="rowStyle">

		<div class="cell"
		     :style="cellStyle"
		     v-for="value of data"
		     track-by="$index">
			{{value}}
		</div>

	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		name: 'SimpleTableRow',
		props: {
			rowIndex: {
				type: Number,
				default: 0
			},
			data: {
				type: Array,
				default: []
			},
			startIndex: {
				type: Number,
				default: 0
			}
		},
		computed: {
			rowClass() {
				return {
					'odd': (this.rowIndex + this.startIndex) % 2 == 0,
					'even': (this.rowIndex + this.startIndex) % 2 == 1
				}
			},
			rowStyle() {
				return {
					top: 60 * (this.rowIndex + this.startIndex) + 'px'
				}
			},
			cellStyle() {
				return {
					width: 100 / this.data.length + '%'
				}
			}
		}
	}
</script>
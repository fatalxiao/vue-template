<template>
    <div class="simple-button">
        <button class="button"
                :type="type"
                :disabled="disabled || loading"
                @click="clickHandle()">
            <i aria-hidden="true"
               :class="icon"></i>
            {{value}}
        </button>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'SimpleButton',
        props: {
            type: {
                type: String,
                default: 'button'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },
            value: {
                type: String,
                default: ''
            },
            iconCls: {
                type: String,
                default: ''
            },
            click: Function
        },
        computed: {
            icon () {
                return this.loading ? 'fa fa-cog fa-spin' : this.iconCls;
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
	@import '../../assets/stylesheets/components/button/simple-button.css';


</style>

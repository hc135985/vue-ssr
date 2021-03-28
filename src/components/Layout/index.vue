<template>
    <div class="layout">
        <div class="menu" ref="menu">
            <div class="menu-head">
              菜单管理
              <span class="close">
                    <el-link @click="closeMenu"><i class="el-icon-arrow-left"></i></el-link>
              </span>
            </div>
        </div>
        <div class="content" ref="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuFlag: true
        }
    },
    methods: {
        closeMenu() {
            this.$refs.menu.style.transform = `translateX(${this.menuFlag ? -80 : 0}%)`;
            this.$refs.content.style.flex = '1';
            this.menuFlag = !this.menuFlag;
        }
    }
}
</script>

<style>
    .layout {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        display: flex;
    }
    .layout .menu {
        width: 200px;
        height: 100%;
        overflow-y: scroll;
        background: rgba(10, 108, 236, 0.76);
        color: #fff;
        position: relative;
        transition: .5s;
    }
    .layout .content {
        flex: 1;
        overflow-y: scroll;
        background: rgb(221, 220, 220);
    }
    .layout .content::-webkit-scrollbar,
    .layout .menu::-webkit-scrollbar {
        display: none;
    }
    .layout .menu-head {
        width: 100%;
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 20px;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        position: relative;
    }
    .menu-head .close {
        position: absolute;
        right: 20px;
        top: 0;
    }
    .close .el-link {
        color: #fff;
    }

</style>

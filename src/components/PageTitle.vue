<script setup>
</script>

<template>
        <div class="row">
                <div class="col-lg-12 mb-3 d-flex justify-content-between align-items-center flex-wrap">
                        <div class="outer d-flex align_center flex-wrap">
                                <div class="main_title mr-5 d-flex align-items-center">
                                        <div class="icon me-2">
                                                <img class="" src="../assets/images/Frame 7.png" alt="">
                                        </div>
                                        <h4>
                                                <slot>123</slot>
                                        </h4>

                                </div>
                                <div class="breadcrumb pt-3 ms-3">
                                        <span>降雨情勢/</span><span>預測雨量/</span><span>
                                                <slot>123</slot>
                                        </span>
                                </div>
                        </div>
                        <div class="renew_time"><span>更新日期：112-10-31</span></div>
                </div>
        </div>
</template>

<style lang="scss" scoped>
header {
        width: 100%;
        position: fixed;
        top: 0;
}

.navbar {
        width: 100%;
        height: 95px;
        border-radius: 10px;
        background-color: #f3f5f7;
        box-shadow: inset 0 -1px 0 0 rgba(98, 105, 118, .16);
        margin-bottom: 50px;
        display: flex;
        padding: 0 10px;

        .container {
                width: 100%;
                display: flex;
                align-items: center;

                .navbar_menu {
                        list-style: none;
                        display: flex;
                        gap: 12px;
                        align-items: center;

                        span {
                                color: #39a771;
                                font-family: Noto Sans TC;
                                font-size: 20px;
                                font-style: normal;
                                font-weight: 700;
                                line-height: normal;
                        }

                        .nav_item a {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                gap: 6px;
                        }
                }

                .navbar_nav {
                        margin-left: auto;
                        display: flex;
                        align-items: center;
                        gap: 6px;
                        cursor: pointer;

                        span {
                                color: #39a771;
                                font-family: Noto Sans TC;
                                font-size: 20px;
                                font-style: normal;
                                font-weight: 700;
                                line-height: normal;
                        }
                }

        }
}

.logo a {
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0.5rem 0 0 34px;
}

.logo_title {
        width: 112px;
        height: 32px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #39a771;
        flex: none;
        order: 0;
        flex-grow: 0;
}

.nav_link_title {}

.logo {
        margin-right: 98px;
}

.logo_img img {
        height: 3rem;
        max-width: 100%;
        vertical-align: middle;
}

.nav-link {
        color: #39a771;
}

.admin_acc {
        .dropdown-toggle::after {
                display: none;
        }
}

.breadcrumb span {
        color: #bbbbbb;
}

h4 {
        color: #606060;
        font-weight: 500;
        font-size: 29px;
        ;
}

.renew_time {
        color: #717171;
        white-space: nowrap;
}
</style>
<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
        <header>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                                <h1 class="logo">
                                        <router-link to="/">
                                                <div class="logo_img">
                                                        <img src="../assets/images/logo.png" alt="">
                                                </div>
                                                <span class="logo_title">農業水資源<br>智慧決策支援平台</span>
                                        </router-link>
                                </h1>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-between ms-3" id="navbarNavDropdown">
                                        <ul class="navbar-nav">
                                                <!-- 降雨情勢 -->
                                                <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle text-success fw-bold fs-5" href="#"
                                                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                降雨情勢
                                                        </a>
                                                        <ul class="dropdown-menu">
                                                                <li class="dropdown dropend">
                                                                        <a class="dropdown-item text-success fw-bold fs-5"
                                                                                href="#" role="button" data-bs-toggle="dropdown"
                                                                                aria-expanded="false"
                                                                                onclick="event.stopPropagation();">
                                                                                即時雨量<svg xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16" height="16"
                                                                                        fill="currentColor"
                                                                                        class="bi bi-caret-right-fill"
                                                                                        viewBox="0 0 16 16">
                                                                                        <path
                                                                                                d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                                                </svg>
                                                                        </a>
                                                                        <ul class="dropdown-menu">
                                                                                <li><a class="dropdown-item text-success fw-bold fs-5"
                                                                                                href="#">日累積雨量</a>
                                                                                </li>
                                                                                <li><a class="dropdown-item text-success fw-bold fs-5"
                                                                                                href="#">降雨組體圖</a>
                                                                                </li>
                                                                        </ul>
                                                                </li>
                                                                <li class="dropdown dropend">
                                                                        <a class="dropdown-item text-success fw-bold fs-5"
                                                                                href="#" role="button" data-bs-toggle="dropdown"
                                                                                aria-expanded="false"
                                                                                onclick="event.stopPropagation();">
                                                                                歷史雨量<svg xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16" height="16"
                                                                                        fill="currentColor"
                                                                                        class="bi bi-caret-right-fill"
                                                                                        viewBox="0 0 16 16">
                                                                                        <path
                                                                                                d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                                                </svg>
                                                                        </a>
                                                                        <ul class="dropdown-menu">
                                                                                <li>
                                                                                        <router-link to="EffectiveRainfallView"
                                                                                                class="dropdown-item text-success fw-bold fs-5">有效雨量分析</router-link>
                                                                                </li>
                                                                        </ul>
                                                                </li>
                                                                <li class="dropdown dropend">
                                                                        <a class="dropdown-item text-success fw-bold fs-5"
                                                                                href="#" role="button" data-bs-toggle="dropdown"
                                                                                aria-expanded="false"
                                                                                onclick="event.stopPropagation();">
                                                                                預測雨量<svg xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16" height="16"
                                                                                        fill="currentColor"
                                                                                        class="bi bi-caret-right-fill"
                                                                                        viewBox="0 0 16 16">
                                                                                        <path
                                                                                                d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                                                </svg>
                                                                        </a>
                                                                        <ul class="dropdown-menu">
                                                                                <li><router-link class="dropdown-item text-success fw-bold fs-5"
                                                                                                to="FutureRainfallEstimationView">未來兩周累積雨量預估</router-link>
                                                                                </li>
                                                                                <li>
                                                                                        <router-link
                                                                                                class="dropdown-item text-success fw-bold fs-5"
                                                                                                to="/WeatherOutlook">季長期天氣展望</router-link>
                                                                                </li>
                                                                        </ul>
                                                                </li>
                                                                <li class="dropdown dropend">
                                                                        <a class="dropdown-item text-success fw-bold fs-5"
                                                                                href="#" role="button" data-bs-toggle="dropdown"
                                                                                aria-expanded="false"
                                                                                onclick="event.stopPropagation();">
                                                                                乾旱監測<svg xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16" height="16"
                                                                                        fill="currentColor"
                                                                                        class="bi bi-caret-right-fill"
                                                                                        viewBox="0 0 16 16">
                                                                                        <path
                                                                                                d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                                                </svg>
                                                                        </a>
                                                                        <ul class="dropdown-menu">
                                                                                <li><a class="dropdown-item text-success fw-bold fs-5"
                                                                                                href="#">累積雨量枯旱排名</a>
                                                                                </li>
                                                                                <li><a class="dropdown-item text-success fw-bold fs-5"
                                                                                                href="#">超越機率累積雨量</a>
                                                                                </li>
                                                                                <li><a class="dropdown-item text-success fw-bold fs-5"
                                                                                                href="#">區域乾旱檢測</a>
                                                                                </li>
                                                                        </ul>
                                                                </li>
                                                        </ul>
                                                </li>
                                                <!-- 水源情勢 -->
                                                <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle text-success fw-bold fs-5" href="#"
                                                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                水源情勢 </a>
                                                        <ul class="dropdown-menu">
                                                                <li class="dropdown dropend">
                                                                        <a class="dropdown-item text-success fw-bold fs-5"
                                                                                href="#" role="button" data-bs-toggle="dropdown"
                                                                                aria-expanded="false"
                                                                                onclick="event.stopPropagation();">
                                                                                水庫水情
                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16" height="16"
                                                                                        fill="currentColor"
                                                                                        class="bi bi-caret-right-fill"
                                                                                        viewBox="0 0 16 16">
                                                                                        <path
                                                                                                d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                                                </svg>
                                                                        </a>
                                                                        <ul class="dropdown-menu">
                                                                                <li><a class="dropdown-item text-success fw-bold fs-5"
                                                                                                href="#">及時水庫水情</a>
                                                                                </li>
                                                                                <li><a class="dropdown-item text-success fw-bold fs-5"
                                                                                                href="#">蓄水量歷線圖</a>
                                                                                </li>
                                                                                <li><a class="dropdown-item text-success fw-bold fs-5"
                                                                                                href="#">每日豐枯水情</a>
                                                                                </li>
                                                                                <li><a class="dropdown-item text-success fw-bold fs-5"
                                                                                                href="#">蓄水量乾枯排名</a>
                                                                                </li>
                                                                                <li><a class="dropdown-item text-success fw-bold fs-5"
                                                                                                href="#">入庫水量乾枯排名</a>
                                                                                </li>
                                                                        </ul>
                                                                </li>
                                                                <li><a class="dropdown-item text-success fw-bold fs-5"
                                                                                href="#">埤塘水情</a>
                                                                </li>
                                                        </ul>
                                                </li>
                                                <!-- 耕作情勢 -->
                                                <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle text-success fw-bold fs-5" href="#"
                                                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                耕作情勢 </a>
                                                        <ul class="dropdown-menu">
                                                                <li><a class="dropdown-item text-success fw-bold fs-5"
                                                                                href="#">耕作分布</a></li>
                                                                <li>
                                                                        <router-link
                                                                                class="dropdown-item text-success fw-bold fs-5"
                                                                                to="/IrrigationPlanTendaysView">灌溉計畫</router-link>

                                                                </li>
                                                                <li><a class="dropdown-item text-success fw-bold fs-5"
                                                                                href="#">灌溉實施</a></li>
                                                        </ul>
                                                </li>
                                                <!-- 供灌決策 -->
                                                <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle text-success fw-bold fs-5" href="#"
                                                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                供灌決策 </a>
                                                        <ul class="dropdown-menu">
                                                                <li><a class="dropdown-item text-success fw-bold fs-5"
                                                                                href="#">供灌情境方案模擬_曾文</a>
                                                                </li>
                                                                <li><a class="dropdown-item text-success fw-bold fs-5"
                                                                                href="#">供灌情境方案模擬_石門</a>
                                                                </li>
                                                                <li><a class="dropdown-item text-success fw-bold fs-5"
                                                                                href="#">供灌配水操作模擬</a></li>
                                                        </ul>
                                                </li>
                                                <!-- 風險分析 -->
                                                <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle text-success fw-bold fs-5" href="#"
                                                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                風險分析 </a>
                                                        <ul class="dropdown-menu">
                                                                <li><a class="dropdown-item text-success fw-bold fs-5"
                                                                                href="#">供灌缺水風險評估</a></li>
                                                                <li><a class="dropdown-item text-success fw-bold fs-5"
                                                                                href="#">推估入流量風險評估</a>
                                                                </li>
                                                        </ul>
                                                </li>
                                        </ul>
                                        <ul class="navbar-nav admin_acc tablet_hide">
                                                <li id="MenuID0" class="nav-item dropdown" aria-expanded="false">
                                                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">
                                                                <div class="outer d-flex align-items-center p-0 ">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                                height="16" fill="currentColor"
                                                                                class="bi bi-person-circle text-success"
                                                                                viewBox="0 0 16 16">
                                                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                                                                <path fill-rule="evenodd"
                                                                                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                                                        </svg>
                                                                        <span
                                                                                class="text-success text-success fw-bold fs-5 p-2">
                                                                                許弘毅 </span>
                                                                </div>
                                                        </a>
                                                        <ul class="dropdown-menu dropdown-menu-end menu1">
                                                                <li>
                                                                        <a class="dropdown-item text-success fw-bold fs-5"
                                                                                href="/Lab/Manage/ChangePassword">變更密碼</a>
                                                                </li>
                                                                <li>
                                                                        <a class="dropdown-item text-success fw-bold fs-5"
                                                                                href="javascript:document.getElementById('logoutForm').submit()">登出</a>
                                                                </li>
                                                        </ul>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </nav>
        </header>
</template>

<style lang="scss" scoped>
header {
        width: 100%;
        position: fixed;
        top: 0;
        padding: 0 10px 10px;
        z-index: 1000;
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
</style>
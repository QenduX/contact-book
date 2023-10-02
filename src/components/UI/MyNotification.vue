<template>
    <div 
        @click="hideNoti" 
        class="notification" 
        :class="showNoti ? 'notification--active' : ''"
    >
        <img src="@/assets/icons/ok.svg" alt="" class="notification__icon">
        <p class="notification__text">{{ textNoti }}</p>
    </div>
</template>
<script>
export default {
    name: 'my-notification',
    props: {
        textNoti: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            showNoti: false,
        }
    },
    methods: {
        hideNoti() {
            this.showNoti = false;
        }
    },
    watch: {
        textNoti() {
            if (this.textNoti) {
                this.showNoti = true;

                setTimeout(() => {
                    this.showNoti = false;
                }, 3000);
            }
        }
    }
}
</script>
<style scoped lang="scss">
.notification {
    display: flex;
    align-items: center;
    background: #ffffff;
    position: fixed;
    z-index: 3;
    bottom: 48px;
    left: 32px;
    padding: 16px 12px 16px 8px;
    border-radius: 4px;
    box-shadow: 0 0 16px 0 rgba(176, 197, 222, 0.50);
    opacity: 0;
    transition: all 0.2s ease;
    user-select: none;
    cursor: pointer;
    pointer-events: none;

    @media screen and (max-width: 576px) {
        top: 64px;
        left: 50%;
        transform: translate(-50%, 0);
        height: 44px;
        background: #545454;
        border-radius: 40px;
        box-shadow: 0 0 20px 0 rgba(176, 197, 222, 0.50);
        padding: 12px 16px;
    }

    &--active {
        opacity: 1;
        pointer-events: all;
    }

    &__icon {
        width: 24px;
        height: 24px;
        margin-right: 4px;
        object-fit: cover;
        user-select: none;
    }

    &__text {
        color: #545454;
        font-size: 14px;
        font-weight: 400;
        line-height: 160%; 

        @media screen and (max-width: 576px) {
            color: #ffffff;
            font-size: 12px;
        }
    }
}
</style>
<template>
    <div class="header">
        <div 
            class="header__main" 
            v-if="mainHeader"
        >
            <div class="header__logo">
                <img class="header__logo-icon" src="@/assets/logo.svg" alt="">
            </div>
            <p class="header__title">Книга кОНТАКТов</p>
        </div>
        <div 
            class="header__block" 
            v-else
        >   
            <div v-if="contact" class="header__contact">
                <span class="header__contact-icon">{{  contact.name.slice(0, 1) }}</span>
                <p class="header__contact-name">{{  contact.name }}</p>
            </div>
            <div v-else class="header__new">
                <img class="header__new-icon" src="@/assets/icons/add_contact.svg" alt="">
                <p class="header__new-text">Добавить контакт</p>
            </div>
            <button class="header__block-btn" @click="$router.push('/')">
                <img src="@/assets/icons/close.svg" alt="" class="header__block-icon">
            </button>
        </div>
    </div>
</template>
<script>
export  default {
    props: {
        mainHeader: {
            type: Boolean,
            default: true,
        },
        contact: {},
    }
}
</script>
<style scoped lang="scss">
.header {
    display: flex;
    align-items: center;
    padding: 8px 48px;
    height: 48px;
    background: #282828;

    @media screen and (max-width: 992px) {
        padding: 8px 32px;
        height: 40px;
    }

    @media screen and (max-width: 768px) {
            padding: 8px 32px;
    }

    @media screen and (max-width: 576px) {
        padding: 8px 12px;
    }

    &__main {
        display: flex;
        align-items: center;
    }

    &__logo {
        width: 42px;
        height: 32px;
        margin-right: 16px;

        @media screen and (max-width: 992px) {
            width: 32px;
            height: 24px;
            margin-right: 8px;
        }

        &-icon {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__title {
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        color: #E0E0E0;

        @media screen and (max-width: 992px) {
            font-size: 14px;
        }
    }

    &__block {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;

        &-btn {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translate(0, -50%);
            width: 32px;
            height: 32px;
            user-select: none;
            border: none;
            background: transparent;
            cursor: pointer;
        }

        &-icon {
            width: 100%;
            height: 100%;
            object-fit: cover;
            user-select: none;
        }
    }

    &__contact {
        display: flex;
        align-items: center;

        &-icon {
            font-size: 12px;
            font-weight: 700;
            display: flex;
            width: 24px;
            height: 24px;
            justify-content: center;
            align-items: center;
            border-radius: 56px;
            background: #FFC700;
        }

        &-name {
            color: #DDD;
            font-size: 20px;
            font-weight: 700;
            margin-left: 8px;

            @media screen and (max-width: 768px) {
                font-size: 14px;
            }
        }
    }

    &__new {
        display: flex;
        align-items: center;

        &-icon {
            width: 24px;
            height: 24px;
            object-fit: cover;
            user-select: none;
        }

        &-text {
            color: #DDD;
            font-size: 20px;
            font-weight: 700;
            margin-left: 8px;

            @media screen and (max-width: 768px) {
                font-size: 14px;
            }
        }
    }
}
</style>
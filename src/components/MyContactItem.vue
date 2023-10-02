<template>
    <li class="item" @click="$router.push(`/contact/${contact.id}`)">
        <div class="item__block">
            <span class="item__avatar">{{  contact.name.slice(0, 1) }}</span>
            <p class="item__name">{{ contact.name }}</p>
        </div>  
        <p class="item__tel">{{ contact.tel }}</p>
        <p class="item__email">{{ contact.email }}</p>
        <p class="item__date">{{ dateLocale }}</p>
        <div class="item__block-mobile">
            <p class="item__tel-mobile">{{ contact.tel }}</p>
            <p class="item__email-mobile">{{ contact.email }}</p>
        </div>
    </li>
</template>
<script>
export default {
    props: {
        contact: Object,
    },
    computed: {
        dateLocale() {
            return this.contact.date.toLocaleDateString('ru-RU', {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
            });
        }
    }
}
</script>
<style scoped lang="scss">
.item {
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    padding: 12px 0;
    border-top: 1px solid #EAF2FD;;
    height: 48px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        background: #EAF2FD;
    }

    &:first-child {
        border-top: none;
    }


    @media screen and (max-width: 576px) {
        padding: 4px 0;
    }

    &__block {
        display: flex;
        align-items: center;
        max-width: 296px;
        width: 100%;

        @media screen and (max-width: 992px) {
            max-width: 240px;
        }

        @media screen and (max-width: 576px) {
            max-width: 184px;
            order: 1;
        }

        @media screen and (max-width: 376px) {
            max-width: 143px;
        }

        &-mobile {
            display: none;
            width: 100%;

            @media screen and (max-width: 576px) {
                display: flex;
                flex-direction: column;
                max-width: 240px;
                order: 2;
                margin: 0 8px;
            }

            @media screen and (max-width: 376px) {
                max-width: 143px;
            }
        }
    }

    &__avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        margin-right: 8px;
        border-radius: 56px;
        background: #FFC700;
        color: #545454;
        font-size: 12px;
        font-weight: 700;
        user-select: none;
        flex-shrink: 0;

        @media screen and (max-width: 376px) {
            display: none;
        }
    }

    &__name {
        color: #545454;
        font-size: 14px;
        font-weight: 400;
        line-height: 160%;

        @media screen and (max-width: 992px) {
            font-size: 12px;
        }
    }

    &__tel {
        max-width: 112px;
        width: 100%;
        color: #545454;
        font-size: 12px;
        font-weight: 400;
        line-height: 160%;
        display: flex;
        align-items: center;

        @media screen and (max-width: 576px) {
            display: none;
        }

        &-mobile {
            color: #545454;
            font-size: 12px;
            font-weight: 400;
            line-height: 160%;
        }
    }

    &__email {
        max-width: 208px;
        width: 100%;
        color: #545454;
        font-size: 12px;
        font-weight: 400;
        line-height: 160%;
        display: flex;
        align-items: center;

        @media screen and (max-width: 576px) {
            display: none;
        }
        
        &-mobile {
            color: #545454;
            font-size: 12px;
            font-weight: 400;
            line-height: 160%;
        }
    }

    &__date {
        display: flex;
        justify-content: end;
        align-items: center;
        max-width: 112px;
        width: 100%;
        color: #545454;
        font-size: 14px;
        font-weight: 400;
        line-height: 160%;
        text-align: end;

        @media screen and (max-width: 992px) {
            font-size: 12px;
        }

        @media screen and (max-width: 576px) {
            max-width: 64px;
            order: 3;
        }

        @media screen and (max-width: 376px) {
            max-width: 58px;
            font-size: 10px;
        }
    }
}
</style>
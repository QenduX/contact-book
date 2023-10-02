<template>
    <div class="contacts">
        <div class="container__wrapper">
            <div v-if="contacts.length" class="contacts__wrapper">
                <div class="contacts__header">
                    <p class="contacts__header-item">КОНТАКТ</p>
                    <p class="contacts__header-item">ТЕЛЕФОН</p>
                    <p class="contacts__header-item">E-MAIL</p>
                    <p class="contacts__header-item">СОЗДАН</p>
                    <p class="contacts__header-item-mobile">ТЕЛЕФОН / E-MAIL</p>
                </div>
                <ul class="contacts__list">
                    <MyContactItem 
                        v-for="contact in contacts"
                        :key="contact.id + contact.name"
                        :contact="contact"
                    />
                </ul>
            </div>
            <div v-else class="contacts__info">
                <p class="contacts__info-text">Контактов нет</p>
            </div>
        </div>
    </div>
</template>
<script>
import MyContactItem from '@/components/MyContactItem.vue';

export default {
    components: {
        MyContactItem
    },
    props: {
        contacts: Array,
    },
    data() {
        return {
            
        }
    }
}
</script>
<style scoped lang="scss">
.contacts {
    margin-top: 12px;

    &__wrapper {
        display: flex;
        flex-direction: column;
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 24px;

        &-item {
            color: #B5B5B5;
            font-size: 10px;
            font-weight: 400;
            line-height: 16px;
            width: 100%;
            text-transform: uppercase;

            &-mobile {
                display: none;
                width: 100%;
                color: #B5B5B5;
                font-size: 10px;
                font-weight: 400;
                line-height: 16px;

                @media screen and (max-width: 576px) {
                    display: block;
                    max-width: 240px;
                    order: 2;
                }

                @media screen and (max-width: 376px) {
                    display: block;
                    max-width: 143px;
                    margin: 0 8px;
                }
            }

            &:nth-child(1) {
                max-width: 296px;

                @media screen and (max-width: 992px) {
                    max-width: 240px;
                }

                @media screen and (max-width: 576px) {
                    max-width: 184px;
                    order: 1;
                }
            }

            &:nth-child(2) {
                max-width: 112px;

                @media screen and (max-width: 576px) {
                    display: none;
                }
            }

            &:nth-child(3) {
                max-width: 208px;

                @media screen and (max-width: 576px) {
                    display: none;
                }
            }

            &:nth-child(4) {
                max-width: 112px;
                text-align: end;

                @media screen and (max-width: 576px) {
                    order: 3;
                    max-width: 64px;
                }

                @media screen and (max-width: 376px) {
                    max-width: 58px;
                }
            }
        }
    }
    
    &__list {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    &__info {
        display: flex;
        justify-content: center;

        &-text {
            font-size: 24px;
            font-weight: 700;
        }
    }
}
</style>
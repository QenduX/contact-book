<template>
    <div class="subheader">
        <div class="container__wrapper">
            <div class="subheader__wrapper">
                <div class="subheader__select">
                    <div 
                        class="subheader__select-block" 
                        @click="onShowList"
                    >
                        <p class="subheader__select-text">{{ selectedOption }}</p>
                        <img 
                            class="subheader__select-icon" 
                            :class="showList ? 'subheader__select-icon--active' : ''" 
                            src="@/assets/icons/rect_down.svg"
                        >
                    </div>
                    <ul 
                        class="subheader__select-list" 
                        :class="showList ? 'subheader__select-list--active' : ''"
                    >
                        <li 
                            class="subheader__select-item"
                            :class="option.name == selectedOption ? 'subheader__select-item--active' : ''"
                            v-for="option in options"
                            :key="option"
                            @click="onChangeOption(option.name)"
                        >
                            {{ option.name }}
                            <img class="subheader__select-item-icon" src="@/assets/icons/accept.svg" alt="">
                        </li>
                    </ul>
                </div>
                <button 
                    @click="$router.push('/new')" 
                    class="subheader__btn"
                >
                    <img src="@/assets/icons/plus.svg" alt="" class="subheader__btn-icon">
                    <span class="subheader__btn-text">Добавить <span class="subheader__btn-sign">КОНТАКТ</span></span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        select: String,
        options: Array
    },
    data() {
        return {
            showList: false,
            selectedOption: this.select ? this.select : 'все',
        }
    },
    methods: {
        onShowList() {
            this.showList = !this.showList;
        },
        onChangeOption(option) {
            this.showList = false;
            this.$emit('update:sort', option);
            this.selectedOption = option;
        }
    }
}
</script>
<style scoped lang="scss">
.subheader {
    border: 1px solid #EAF2FD;
    background: #F9FCFF;
    height: 56px;

    @media screen and (max-width: 992px) {
        height: 48px;
    }

    &__wrapper {
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
    }

    &__select {
        position: relative;
        width: 100%;
        max-width: 235px;
        height: 40px;

        @media screen and (max-width: 992px) {
            height: 32px;
        }

        &:hover {
            .subheader__select-block {
                border: 1px solid #2F80ED;
            }

            .subheader__select-text {
                font-weight: 400;
            }
        }

        @media screen and (max-width: 576px) {
            max-width: 219px;
        }

        &-block {
            width: 100%;
            display: flex;
            align-items: center;
            padding: 8px 10px;
            background: #ffffff;
            height: 40px;
            border-radius: 4px;
            border: 1px solid #DDD;
            transition: all 0.2s ease;
            cursor: pointer;
            user-select: none;

            @media screen and (max-width: 992px) {
                height: 32px;
            }
        }

        &-text {
            font-size: 14px;
            font-weight: 700;
            line-height: 160%;
            width: 100%;
            text-transform: uppercase;
            transition: all 0.2s ease;

            &-gray {
                color: #A9A9A9;
            }
        }

        &-icon {
            flex-shrink: 0;
            width: 16px;
            height: 16px;
            margin-left: 8px;
            object-fit: cover;
            user-select: none;
            transition: all 0.2s ease;

            &--active {
                transform: rotate(180deg);
            }
        }

        &-list {
            background: #ffffff;
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 100%;
            transform: translate(0, 100%);
            border-radius: 4px;
            box-shadow: 0 0 6px 0 rgba(148, 181, 225, 0.35);
            opacity: 0;
            transition: all 0.2s ease;
            user-select: none;
            pointer-events: none;

            &--active {
                pointer-events: all;
                opacity: 1;
            }
        }

        &-item {
            position: relative;
            padding: 10px 8px 10px 16px;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            cursor: pointer;
            transition: all 0.2s ease;
            text-transform: uppercase;
            
            &-icon {
                position: absolute;
                right: 8px;
                top: 50%;
                transform: translate(0, -50%);
                width: 16px;
                height: 16px;
                object-fit: cover;
                display: none;
            }

            &--active {
                font-weight: bold;

                .subheader__select-item-icon {
                    display: block;
                }
            }

            &:hover {
                background: #EAF2FD;
            }
        }
    }

    &__btn {
        display: flex;
        align-items: center;
        height: 40px;
        padding: 8px 16px;
        background: #ffffff;
        border-radius: 28px;
        border: 1px solid #2F80ED;
        cursor: pointer;
        transition: all 0.2s ease;
        flex-shrink: 0;

        @media screen and (max-width: 992px) {
            height: 32px;
        }

        &:hover {
            box-shadow: 0 0 12px 0 rgba(148, 181, 225, 0.35);
        }

        @media screen and (max-width: 992px) {
            width: 181px;
            margin-left: 12px;
        }

        @media screen and (max-width: 576px) {
            width: 117px;
            margin-left: 12px;
        }

        &-icon {
            width: 16px;
            height: 16px;
            object-fit: cover;
            user-select: none;
            margin-right: 4px;
        }

        &-text {
            color: #2F80ED;
            font-size: 12px;
            font-weight: 700;
            line-height: 16px;
            text-transform: uppercase;
        }

        &-sign {
            color: #2F80ED;
            font-size: 12px;
            font-weight: 700;
            line-height: 16px;
            text-transform: uppercase;

            @media screen and (max-width: 576px) {
                display: none;
            }
        }
    }
}
</style>

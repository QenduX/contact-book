<template>
    <div class="select">
        <div 
            class="select__block" 
            @click="onShowList"
        >
            
            <input 
                type="text"
                readonly
                :id="idSelect"
                :value="selected ? selected : ''"
                :placeholder="!selected ? 'Не выбрано' : ''"
                class="select__input"
                :class="!selected ? 'select__input-gray' : ''"
            >
            <img 
                class="select__icon" 
                :class="showList ? 'select__icon--active' : ''" 
                src="@/assets/icons/rect_down.svg"
            >
        </div>
        <ul 
            class="select__list" 
            :class="showList ? 'select__list--active' : ''"
        >
            <li 
                class="select__item"
                v-for="option in options"
                :key="option"
                :class="option.name == selected ? 'select__item--active' : ''"
                @click="onChangeOption(option.name)"
            >
                {{ option.name }}
                <img class="select__item-icon" src="@/assets/icons/accept.svg" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'my-select',
    props: {
        value: String,
        idSelect: String,
        options: Array,
    },
    data() {
        return {
            showList: false,
            selected: this.value ? this.value : '',
        }
    },
    methods: {
        onShowList() {
            this.showList = !this.showList;
        },
        onChangeOption(option) {
            this.selected = option;
            this.showList = false;
            this.$emit('update:select', option);
        },
    },
}
</script>
<style scoped lang="scss">
.select {
    position: relative;
    width: 100%;

    &:hover {
        .select__block {
            border: 1px solid #2F80ED;
        }
    }

    &--error {
        .select__block {
            border: 1px solid #EB5757;

            &::before {
                opacity: 1;
            }
        }

        .select__input {
            &::placeholder {
                color: #EB5757;
            }
        }
    }

    &__block {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 8px 10px;
        background: #ffffff;
        height: 40px;
        border-radius: 4px;
        border: 1px solid #DDDDDD;
        transition: all 0.2s ease;
        cursor: pointer;
        user-select: none;

        &::before {
            content: '';
            position: absolute;
            z-index: 2;
            right: 8px;
            top: 50%;
            transform: translate(0, -50%);
            background-image: url('@/assets/icons/error.svg');
            background-size: cover;
            width: 16px;
            height: 16px;
            opacity: 0;
            user-select: none;
            pointer-events: none;
            transition: all 0.2s ease;
        }
    }

    &__input {
        font-size: 14px;
        font-weight: 400;
        line-height: 160%;
        width: 100%;
        border: none;
        user-select: none;
        cursor: pointer;
        
        &:focus, &:active, &:focus-visible {
            border: none;
            outline: none;
        }

        &::placeholder {
            color: #A9A9A9;
            font-size: 14px;
            font-weight: 400;
            line-height: 160%; 
        }
    }

    &__icon {
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

    &__list {
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

    &__item {
        position: relative;
        padding: 10px 8px 10px 16px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        cursor: pointer;
        transition: all 0.2s ease;

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
            .select__item-icon {
                display: block;
            }
        }

        &:hover {
            background: #EAF2FD;
        }
    }
}
</style>
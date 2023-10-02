<template>
    <label class="input__label">
        <input
            @input="updateInput"
            :value="modelValue"
            :id="inputId"
            :placeholder="inputPlaceholder"
            :type="inputType"
            class="input"
        >
    </label>
</template>
<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number],
        inputId: String,
        inputPlaceholder: {
            type: String,
            default: 'Введите текст',
        },
        inputType: {
            type: String,
            default: 'text',
        },
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>
<style scoped lang="scss">
.input {
    position: relative;
    width: 100%;
    color: #545454;
    font-size: 14px;
    font-weight: 400;
    line-height: 160%; 
    border-radius: 4px;
    padding: 8px;
    border: 1px solid #DDD;
    background: #FFF;
    transition: all 0.2s ease;
    height: 40px;

    &::placeholder {
        color: #A9A9A9;
        font-size: 14px;
        font-weight: 400;
        line-height: 160%; 
        user-select: none;
    }

    &:focus, &:active, &:focus-visible {
        border: 1px solid #2F80ED;
        outline: none;
    }

    &:hover {
        border: 1px solid #2F80ED;
    }

    &__label {
        display: flex;
        position: relative;
        width: 100%;

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

        &--error {
            .input {
                color: #EB5757;
                border: 1px solid #EB5757;
                padding: 8px 28px 8px 8px;

                &::placeholder {
                    color: #EB5757;
                }
            }

            &::before {
                opacity: 1;
            }
        }
    }   
}
</style>
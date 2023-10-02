<template>
    <button class="btn">
        <img 
            src="@/assets/icons/save.svg" 
            alt="save" 
            class="btn__icon" 
            :class="showLoader ? 'btn__icon--hide' : ''"
        >
        <img 
            src="@/assets/icons/loader.svg" 
            alt="save" 
            class="btn__icon btn__icon-load " 
            :class="showLoader ? 'btn__icon-load--active' : ''"
        >
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'my-button',
    props: {
        showLoader: {
            type: Boolean,
            default: false,
        }
    },
}
</script>
<style scoped lang="scss">
.btn {
    display: flex;
    align-items: center;
    background: #FFC700;
    color: #545454;
    font-size: 14px;
    font-weight: 700;
    line-height: 120%;
    text-transform: uppercase;
    height: 40px;
    border-radius: 4px;
    padding: 12px 16px;
    border: none;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s ease;

    &:focus, &:focus-visible {
        border: none;
    }

    &:hover {
        background: #FFD84C;
    }

    &:active {
        background: #F3C41E;
        transition: all 0.1s ease;
    }

    @media screen and (max-width: 768px) {
        flex-shrink: 0;
    }

    &__icon {
        width: 16px;
        height: 16px;
        margin-right: 4px;
        object-fit: cover;

        &--hide {
            display: none;
        }

        &-load {
            display: none;

            &--active {
                display: block;
                animation: 3s infinite laoder linear;
            }
        }
    }
}

@keyframes laoder {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>

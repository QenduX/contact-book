<template>
    <form @submit.prevent class="form">
        <p v-if="contact" class="form__title">Контакт</p>
        <p v-else class="form__title">Новый контакт</p>
        <div class="form__items">
            <div class="form__item">
                <p class="form__text">Имя</p>
                <div class="form__block">
                    <my-input 
                        v-model.trim="form.name"
                        inputId="name"
                        inputPlaceholder="Например «Андрей»..."
                        :class="v$.form.name.$error ?  'input__label--error' : ''"
                    ></my-input>
                    <span 
                        class="form__error"
                        v-for="error in v$.form.name.$errors" 
                        :key="error.$uid"
                    >
                        {{ error.$message }}
                    </span>
                </div>
            </div>
            <div class="form__item">
                <p class="form__text">Телефон</p>
                <div class="form__block">
                    <my-input 
                        v-model.trim="form.tel"
                        inputId="tel"
                        inputPlaceholder="+7(___)-___-__-__"
                        inputType="tel"
                        :class="v$.form.tel.$error ?  'input__label--error' : ''"
                        v-mask="['+7(###)##-##-##', '+7(###)###-##-##']"
                    ></my-input>
                    <span 
                        class="form__error"
                        v-for="error in v$.form.tel.$errors" 
                        :key="error.$uid"
                    >
                        {{ error.$message }}
                    </span>
                </div>
            </div>
            <div class="form__item">
                <p class="form__text">E-mail</p>
                <div class="form__block">
                    <my-input 
                        v-model.trim="form.email"
                        inputId="email"
                        inputPlaceholder="Например «pochta@domain.ru»..."
                        inputType="email"
                        :class="v$.form.email.$error ?  'input__label--error' : ''"
                    ></my-input>
                    <span 
                        class="form__error"
                        v-for="error in v$.form.email.$errors" 
                        :key="error.$uid"
                    >
                        {{ error.$message }}
                    </span>
                </div>
            </div>
            <div class="form__item">
                <p class="form__text">Категория</p>
                <div class="form__block">
                    <my-select 
                        :options="category"
                        :value="form.category" 
                        v-model:select="form.category"
                        :class="v$.form.category.$error ?  'select--error' : ''"
                    ></my-select>
                    <span 
                            class="form__error"
                            v-for="error in v$.form.category.$errors" 
                            :key="error.$uid"
                        >
                        {{ error.$message }}
                    </span>
                </div>
            </div>
            <div v-if="contact" class="form__item">
                <p class="form__text">Создан</p>
                <p class="form__date">{{ dateLocale }}</p>
            </div>
        </div>
        <div class="form__btns">
            <my-button
                v-if="contact"
                :showLoader="showLoader"
                @click="onUpdateContact"
            >
                СОХРАНИТЬ
            </my-button>
            <my-button
                v-else
                :showLoader="showLoader"
                @click="onCreateContact"
            >
                СОХРАНИТЬ
            </my-button>
            <button 
                v-if="contact"
                @click="onDeleteContact"
                class="form__delete"
            >
                <img src="@/assets/icons/delete.svg" alt="delete" class="form__delete-icon">
                Удалить контакт
            </button>
        </div>
    </form>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { email, required, minLength, helpers } from '@vuelidate/validators'
import {mask} from 'vue-the-mask'

export default {
    directives: {mask},
    props: {
        contact: Object,
        category: Array,
    },  
    data() {
        return {
            form: {
                name: '',
                tel: '',
                email: '',
                category: '',
                date: '',
            },
            showLoader: false,
        }
    },
    validations() {
        return {
            form: {
                name: { 
                    required: helpers.withMessage('Поле не можеть быть пустым', required),
                    minLength: helpers.withMessage('Слишком короткое имя', minLength(4)) 
                },
                tel: { 
                    required: helpers.withMessage('Поле не можеть быть пустым', required),
                    minLength: helpers.withMessage('Некорректный номер', minLength(16)) 
                },
                email: {
                    required: helpers.withMessage('Поле не можеть быть пустым', required),
                    email: helpers.withMessage('Некорректный e-mail', email),
                },
                category: { 
                    required: helpers.withMessage('Поле не можеть быть пустым', required),
                }
            }
        }
    },
    setup: () => ({ v$: useVuelidate() }),
    methods: {
        updateForm() {
            if (this.contact) {
                this.form.id = this.contact.id;
                this.form.name = this.contact.name;
                this.form.tel = this.contact.tel;
                this.form.email = this.contact.email;
                this.form.category = this.contact.category;
                this.form.date = this.contact.date;
            }
        },
        onCreateContact() {
            if (this.v$.$invalid) {
                this.v$.$validate()
                return
            }

            this.showLoader = true;
            this.form.date = new Date();
            this.form.id = Number(new Date());

            setTimeout(() => {
                this.$router.push('/');
                this.$emit('create', this.form);
            }, 2000);
        },
        onUpdateContact(){
            console.log('update')
            if (this.v$.$invalid) {
                this.v$.$validate()
                return
            }

            this.showLoader = true;

            setTimeout(() => {
                this.$emit('update', this.form);
                this.$router.push('/');
            }, 2000);
        },
        onDeleteContact() {
            this.$emit('delete', this.contact.id);
            this.$router.push('/');
        }
    },
    computed: {
        dateLocale() {
            return this.form.date.toLocaleDateString('ru-RU', {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
            });
        }
    },
    created() {
        this.updateForm();
    }
}
</script>
<style scoped lang="scss">
.form {
    background: #ffffff;
    box-shadow: 0px 0px 6px 0px rgba(148, 181, 225, 0.35);
    max-width: 704px;
    width: 100%;
    padding: 48px 64px 64px 64px;
    margin: 24px auto;

    @media screen and (max-width: 768px) {
        margin: 24px 32px;
    }

    @media screen and (max-width: 576px) {
        max-width: 552px;
        margin: 24px 12px;
        padding: 32px 48px 48px 48px;
    }

    @media screen and (max-width: 376px) {
        padding: 32px 20px 48px 20px;
    }

    &__title {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 24px;
    }

    &__items {
        display: flex;
        flex-direction: column;
    }

    &__item {
        display: flex;
        align-items: center;
        margin-top: 16px;
        height: 40px;

        &:first-child {
            margin-top: 0;
        }
    }

    &__text {
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        flex-shrink: 0;
        width: 136px;
        margin-right: 32px;

        @media screen and (max-width: 768px) {
            font-size: 12px;
            max-width: 136px;
            width: 100%;
        }

        @media screen and (max-width: 560px) {
            max-width: 72px;
            margin-right: 12px;
        }

        @media screen and (max-width: 376px) {
            max-width: 72px;
            margin-right: 12px;
        }
    }

    &__block {
        width: 100%;
        position: relative;
    }

    &__error {
        position: absolute;
        right: 0;
        bottom: 0;
        transform: translate(0, 100%);
        z-index: 1;
        color: #EB5757;
        font-size: 10px;
        font-weight: 400;
        line-height: 16px; 
    }

    &__date {
        padding: 8px;
    }

    &__btns {
        display: flex;
        align-items: center;
        padding-left: 168px;
        margin-top: 32px;

        @media screen and (max-width: 560px) {
            padding-left: 0;
            justify-content: center;
        }
    }

    &__delete {
        display: flex;
        align-items: center;
        background: transparent;
        color: #2F80ED;
        font-size: 12px;
        font-weight: 400;
        height: 40px;
        margin-left: 24px;
        border: none;
        cursor: pointer;

        &-icon {
            width: 12px;
            height: 12px;
            margin-right: 2px;
            object-fit: cover;
        }
    }
}
</style>
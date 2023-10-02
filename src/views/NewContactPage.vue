<template>
    <MyHeader 
        :mainHeader="false"
    />
    <div class="container">
        <MyForm 
            :category="category"
            @create="createContact"
        />
    </div>
    <my-notification>Контакт успешно создан</my-notification>
</template>
<script>
import MyHeader from '@/components/MyHeader.vue';
import MyForm from '@/components/MyForm.vue';
import { mapState,mapActions } from 'vuex'

export default {
    components: { MyHeader, MyForm },
    methods: {
        ...mapActions({
            createContact: 'contacts/createContact',
        })
    },
    computed: {
        ...mapState({
            category: state => state.contacts.category,
        })
    }
}
</script>
<style lang="scss">
.container {
    display: flex;
}
</style>
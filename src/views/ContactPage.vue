<template>
    <MyHeader 
        :mainHeader="false"
        :contact="contact"
    />
    <div class="container">
        <MyForm 
            :contact="contact"
            :category="category"
            @update="updateContact"
            @delete="deleteContact"
        />
    </div>
    <my-notification>Контакт успешно изменён</my-notification>
</template>
<script>
import MyHeader from '@/components/MyHeader.vue';
import MyForm from '@/components/MyForm.vue';
import {mapState, mapActions} from 'vuex'

export default {
    components: { MyHeader, MyForm }, 
    methods: {
        ...mapActions({
            fetchContact: 'contacts/fetchContact',
            updateContact: 'contacts/updateContact',
            deleteContact: 'contacts/deleteContact',
        })
    },
    computed: {
        idContact() {
            return this.$route.params.id;
        },
        ...mapState({
            contact: state => state.contacts.contact,
            category: state => state.contacts.category,
        })
    },
    created() {
        this.fetchContact(this.idContact)
    }, 
}
</script>
<style scoped lang="scss">
.container {
    display: flex;
}
</style>
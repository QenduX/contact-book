<template>
    <MyHeader />
    <MySubHeader 
        :select="selectedSort" 
        :options="selectedOptions" 
        @update:sort="setSelectedSort"
    />
    <MyContacts :contacts="getSortContacts"/>
    <my-notification :textNoti="notiText"></my-notification>
</template>
<script>
import MyHeader from '@/components/MyHeader.vue';
import MySubHeader from '@/components/MySubHeader.vue';
import MyContacts from '@/components/MyContacts.vue';
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'

export default {
    components: { MyHeader, MySubHeader, MyContacts },
    data() {
        return {
            // contacts: [
            //     {id: 1, name: 'Айтишник Данила', tel: '+7(987)654-78-09', email: 'nelfeelingood@gmail.com', date: '22.09.23', category: 'Родственик'},
            //     {id: 2, name: 'Арендодатель Виктория', tel: '+7(987)654-78-10', email: 'nelfeelingood1@gmail.com', date: '22.09.23', category: 'Колега'},
            //     {id: 3, name: 'Двери Вадим', tel: '+7(987)654-78-11', email: 'nelfeelingood2@gmail.com', date: '23.09.23', category: 'Родственик'},
            //     {id: 4, name: 'Доставка Андрей Стоянов', tel: '+7(987)654-78-12', email: 'nelfeelingood3@gmail.com', date: '24.09.23', category: 'Колега'},
            // ],
        }
    },
    computed: {
        ...mapState({
            contacts: state => state.contacts.contacts,
            notiText: state => state.contacts.notiText,
            selectedOptions: state => state.contacts.selectedOptions,
            selectedSort: state => state.contacts.selectedSort,
        }),
        ...mapGetters({
            getSortForDate: 'contacts/getSortForDate',
            getSortContacts: 'contacts/getSortContacts',
        })
    },
    methods: {
        ...mapActions({
            fetchContacts: 'contacts/fetchContacts',
        }),
        ...mapMutations({
            setSelectedSort: 'contacts/setSelectedSort',
        }),
    },
    created() {
        this.fetchContacts()
    }
}
</script>
<style lang="scss">
</style>
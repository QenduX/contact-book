import axios from 'axios'

const BASE_URL = 'http://localhost';

export const contactsModule  ={
  state: () => ({
    contacts: [
      {id: 1, name: 'Айтишник Данила', tel: '+7(987)654-78-09', email: 'nelfeelingood@gmail.com', date: new Date('2023, 09, 24'), category: 'Родственники'},
      {id: 2, name: 'Арендодатель Виктория', tel: '+7(987)654-78-10', email: 'nelfeelingood1@gmail.com', date: new Date('2023, 08, 22'), category: 'Коллеги'},
      {id: 3, name: 'Двери Вадим', tel: '+7(987)654-78-11', email: 'nelfeelingood2@gmail.com', date: new Date('2023, 09, 23'), category: 'Родственники'},
      {id: 4, name: 'Доставка Андрей Стоянов', tel: '+7(987)654-78-12', email: 'nelfeelingood3@gmail.com', date: new Date('2023, 09, 24'), category: 'Коллеги'},
      {id: 5, name: 'Андрей Стоянов', tel: '+7(987)654-78-13', email: 'nelfeelingood4@gmail.com', date: new Date('2023, 09, 21'), category: 'Коллеги'},
    ],
    contact:  null,
    selectedSort: 'все',
    selectedOptions: [
      {name: 'все'},
      {name: 'родственники'},
      {name: 'коллеги'},
    ],
    notiText: '',
    category: [
      {name: 'Родственники'},
      {name: 'Коллеги'},
    ]
  }),
  getters: {
    getSortForDate(state) {
      return state.contacts.sort((c1, c2) => Number(c1.date) - Number(c2.date))
    },
    getSortContacts(state, getters) {
      return getters.getSortForDate.filter(c => {
        if (state.selectedSort.toLowerCase() === 'все') {
          return true
        }
        else {
          return c.category.toLowerCase() === state.selectedSort.toLowerCase()
        }
      })
    },
  },
  mutations: {
    setContacts(state, contacts) {
      state.contacts = contacts
    },
    setContact(state, contact) {
      state.contact = contact
    },
    setNotiText(state, notiText) {
      state.notiText = notiText
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    }
  },
  actions: {
    async fetchContacts({commit, state}) {
      commit('setContacts', state.contacts);

      try {
        const response = await axios.get(BASE_URL + '/contacts')
        commit('setContacts', response.data);
      }
      catch (e) {
        console.error(e)
      }
    },
    async fetchContact({commit, state}, contactId) {
      commit('setContact', state.contacts.find(c => c.id === Number(contactId)));

      try {
        const response = await axios.get(BASE_URL + '/contacts', { params: { id: contactId } })
        commit('setContact', response.data);
      }
      catch (e) {
        console.error(e)
      }
    },
    async createContact({commit, state}, contact) {
      commit('setContacts', [...state.contacts, contact]);

      try {
        const response = await axios.post(BASE_URL + '/new', {  
          headers: {
            'Content-Type': 'application/json'
          } })

        commit('setContacts', [...state.contacts, response.data]);
        commit('setNotiText', 'Контакт успешно создан');
        setTimeout(()=>{ commit('setNotiText', '');}, 4000)
      }
      catch (e) {
        console.error(e);
        commit('setNotiText', 'Контакт успешно создан');
        setTimeout(()=>{ commit('setNotiText', '');}, 4000)
      }
    },
    async updateContact({commit, state}, contact) {
      // const obj = state.contacts.find(n => n.id === contact.id);
      // if (obj) {
      //     Object.assign(obj, contact);
      // }
      commit('setContacts', [...state.contacts.filter(c => c.id != contact.id), contact]);

      try {
        const response = await axios.put(BASE_URL + '/update', {  
          params: {contact: contact},
          headers: {
            'Content-Type': 'application/json'
          } })

        commit('setContacts', response.date);
        commit('setNotiText', 'Контакт успешно изменён');
        setTimeout(()=>{ commit('setNotiText', '');}, 4000)
      }
      catch (e) {
        console.error(e);
        commit('setNotiText', 'Контакт успешно изменён');
        setTimeout(()=>{ commit('setNotiText', '');}, 4000)
      }
    },
    async deleteContact({commit, state}, contactId) {
      commit('setContacts', state.contacts.filter(c => c.id != Number(contactId)));

      try {
        const response = await axios.delete(BASE_URL + '/delete', {params: {id: contactId}})
        commit('setContacts',  response.data);
        commit('setNotiText', 'Контакт удалён');
        setTimeout(()=>{ commit('setNotiText', '');}, 4000)
      }
      catch (e) {
        console.error(e);
        commit('setNotiText', 'Контакт удалён');
        setTimeout(()=>{ commit('setNotiText', '');}, 4000)
      }
    },
  },
  namespaced: true
}

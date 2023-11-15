<template>
    <div>
        <div class="flex justify-between">
            <h2 class="text-2xl font-bold">Démonstration du CRUD Spring Boot:</h2>
            <button @click="showForm = true" class="bg-green-500 font-bold py-2 px-4 text-white rounded-lg shadow-xl">+</button>
        </div>
        <div class="mt-8">
            <ul class="flex flex-col text-xl space-y-4">
                <li v-for="customer in customers" :key="customer.id" class="flex justify-between">
                    {{ customer.id }} - {{ customer.name }}
                    <div class="flex space-x-2">
                        <button @click="editCustomer(customer.id)" class="bg-orange-500 p-2 rounded-lg text-white">Modifier</button>
                        <button @click="deleteCustomer(customer.id)"  class="bg-red-500 p-2 rounded-lg text-white flex"><img src="/svg/delete.svg" class="text-white w-5 h-5 mr-1 mt-1" />Supprimer</button>
                    </div>
                </li>
            </ul>
        </div>

        <div v-if="showForm" class="px-8 py-4 text-xl mx-auto w-1/4 bg-white rounded-lg">
            <div class="flex justify-between">
                <h3>{{ editMode ? 'Modifier le customer' : 'Ajouter un Customer' }}</h3>
                <button @click="showForm = false">X</button>
            </div>
            <form @submit.prevent="submitForm">
                <label for="name">Nom:</label>
                <input type="text" v-model="formData.name" required>

                <button type="submit">{{ editMode ? 'Modifier' : 'Ajouter' }}</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            customers: [],
            showForm: false,
            editMode: false,
            formData: {
                name: '',
            },
        };
    },
    mounted() {
        this.fetchCustomers();
    },
    methods: {
        fetchCustomers() {
            axios.get('http://localhost:8080/api/customers')
                .then(response => {
                    this.customers = response.data;
                })
                .catch(error => {
                    console.error('Error fetching customers:', error);
                });
        },
        editCustomer(id) {
            const customer = this.customers.find(c => c.id === id);

            this.formData = { ...customer };

            this.editMode = true;
            this.showForm = true;
        },
        deleteCustomer(id) {
            axios.delete(`http://localhost:8080/api/customers/${id}`)
                .then(() => {
                    this.customers = this.customers.filter(c => c.id !== id);
                })
                .catch(error => {
                    console.error('Error deleting customer:', error);
                });
        },
        submitForm() {
            if (this.editMode) {
                axios.put(`http://localhost:8080/api/customers/${this.formData.id}`, this.formData)
                    .then(() => {
                        this.fetchCustomers();
                    })
                    .catch(error => {
                        console.error('Error updating customer:', error);
                    });
            } else {
                axios.post('http://localhost:8080/api/customers', this.formData)
                    .then(() => {
                        this.fetchCustomers();
                    })
                    .catch(error => {
                        console.error('Error creating customer:', error);
                    });
            }
            this.showForm = false;
            this.editMode = false;
        },
    },
};
</script>

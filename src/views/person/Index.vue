<template>
  <div class="container my-5">
    <h1 class="text-center fw-bold my-4">Person</h1>
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="d-flex justify-content-center">
          <router-link :to="{name : 'profession.profession'}" class="btn btn-primary m-2">Profession</router-link>
          <router-link :to="{name : 'hobby.hobby'}" class="btn btn-primary m-2">Hobby</router-link>
        </div>

        <div class="card rounded shadow my-3">
          <div class="card-header">
            <router-link 
              :to="{name : 'person.create'}"
              class="btn btn-primary"
            >Create Data</router-link>
          </div>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Profession ID</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(person, index) in persons.data" :key="index">
                  <td>{{ person.name }}</td>
                  <td>{{ person.phone }}</td>
                  <td>{{ person.profession_id }}</td>
                  <td>
                    <div class="btn-group">
                      <router-link
                        :to="{name : 'person.edit', params:{id: person.id}}"
                        class="btn btn-sm btn-info rounded-3"
                      >Edit</router-link>
                      <button class="btn btn-sm btn-danger mx-2 rounded-3" @click.prevent="destroy(person.id, index)">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {onMounted, ref} from 'vue'

export default {
  setup() {
    let persons = ref([]);

    onMounted(() => {
      //get data from api
      axios.get('https://test-case.fe.can.co.id/api/person')
      .then((result) => {
        persons.value = result.data
      }).catch((err) => {
        console.log(err.response)
      });
    });

    function destroy(id, index) {
      axios.delete(
        `https://test-case.fe.can.co.id/api/person/${id}`
      ).then(() => {
        persons.value.data.splice(index, 1);
      }).catch((errors) => {
        console.log(errors.response.data);
      });
    }

    return {
      persons,
      destroy
    }
  }
}
</script>

<style>

</style>
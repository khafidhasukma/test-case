<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <router-link 
          :to="{name : 'person.index'}"
          class="btn btn-primary"
        >Back</router-link>

        <div class="card rounded shadow my-3">
          <div class="card-header">
            Create Person
          </div>
          <div class="card-body">
            <form @submit.prevent="store()">
              <div class="mb-3">
                <label for="" class="form-label">Name</label>
                <input type="text" class="form-control" v-model="person.name">
                <div v-if="validation.errors" class="text-danger">
                  {{ validation.errors.name[0] }}
                </div>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Phone</label>
                <input type="phone" class="form-control" v-model="person.phone">
                <div v-if="validation.errors" class="text-danger">
                  {{ validation.errors.phone[0] }}
                </div>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Profession ID</label>
                <input type="number" class="form-control" v-model="person.profession_id">
                <div v-if="validation.errors" class="text-danger">
                  {{ validation.errors.profession_id[0] }}
                </div>
              </div>
              <button class="btn btn-outline-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, ref} from 'vue'
import {useRouter} from 'vue-router'
import axios from 'axios'

export default {
  setup() {
    // data binding
    const person = reactive({
      name: '',
      phone: '',
      profession_id: ''
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      axios.post(
        'https://test-case.fe.can.co.id/api/person',
        person
      ).then(() => {
        router.push({
          name: 'person.index'
        });
      }).catch((errors) => {
        validation.value = errors.response.data
      });
    }

    return {
      person,
      validation,
      router,
      store
    }
  }
}
</script>

<style>

</style>
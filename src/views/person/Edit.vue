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
            Edit Person
          </div>
          <div class="card-body">
            <form @submit.prevent="update()">
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
import {reactive, ref, onMounted} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import axios from 'axios'

export default {
  setup() {
    // data binding
    let person = reactive({
      name: '',
      phone: '',
      profession_id: ''
    });

    const validation = ref([]);

    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      axios.get(`https://test-case.fe.can.co.id/api/person/${route.params.id}`)
      .then((result) => {
        person.name = result.data.data.name
        person.phone = result.data.data.phone
        person.profession_id = result.data.data.profession_id
      }).catch((err) => {
        console.log(err.response.data)
      })
    });

    function update() {
      axios.put(
        `https://test-case.fe.can.co.id/api/person/${route.params.id}`,
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
      update
    }
  }
}
</script>

<style>

</style>
<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <router-link 
          :to="{name : 'profession.profession'}"
          class="btn btn-primary"
        >Back</router-link>

        <div class="card rounded shadow my-3">
          <div class="card-header">
            Create Profession
          </div>
          <div class="card-body">
            <form @submit.prevent="store()">
              <div class="mb-3">
                <label for="" class="form-label">Name</label>
                <input type="text" class="form-control" v-model="profession.name" required>
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
    const profession = reactive({
      id : '',
      name : '',
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      axios.post(
        'https://test-case.fe.can.co.id/api/profession',
        profession
      ).then(() => {
        router.push({
          name: 'profession.profession'
        });
      }).catch((error) => {
        console.log(error.response)
      });
    }

    return {
      profession,
      validation,
      router,
      store
    }
  }
}
</script>

<style>

</style>
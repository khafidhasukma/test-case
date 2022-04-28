<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <router-link 
          :to="{name : 'hobby.hobby'}"
          class="btn btn-primary"
        >Back</router-link>

        <div class="card rounded shadow my-3">
          <div class="card-header">
            Edit Hobby
          </div>
          <div class="card-body">
            <form @submit.prevent="update()">
              <div class="mb-3">
                <label for="" class="form-label">Hobby</label>
                <input type="text" class="form-control" v-model="hobby.name">
                <div v-if="validation.errors" class="text-danger">
                  {{ validation.errors.name[0] }}
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
    let hobby = reactive({
      id : '',
      name: ''
    });

    const validation = ref([]);

    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      axios.get(`https://test-case.fe.can.co.id/api/hobby/${route.params.id}`)
      .then((result) => {
        hobby.name = result.data.data.name
      }).catch((err) => {
        console.log(err.response.data)
      })
    });

    function update() {
      axios.put(
        `https://test-case.fe.can.co.id/api/hobby/${route.params.id}`,
        hobby
      ).then(() => {
        router.push({
          name: 'hobby.hobby'
        });
      }).catch((errors) => {
        validation.value = errors.response.data
      });
    }

    return {
      hobby,
      validation,
      router,
      update
    }
  }
}
</script>

<style>

</style>
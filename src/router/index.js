import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path : '/',
    name : 'person.index',
    component :() => import("../views/person/Index.vue")
  },
  {
    path : '/person/create',
    name : 'person.create',
    component :() => import("../views/person/Create.vue")
  },
  {
    path : '/person/edit/:id',
    name : 'person.edit',
    component :() => import("../views/person/Edit.vue")
  },
  {
    path : '/profession',
    name : 'profession.profession',
    component :() => import("../views/profession/Profession.vue")
  },
  {
    path : '/profession/create',
    name : 'profession.create',
    component :() => import("../views/profession/Create.vue")
  },
  {
    path : '/profession/edit/:id',
    name : 'profession.edit',
    component :() => import("../views/profession/Edit.vue")
  },
  {
    path : '/hobby',
    name : 'hobby.hobby',
    component :() => import("../views/hobby/Hobby.vue")
  },
  {
    path : '/hobby/create',
    name : 'hobby.create',
    component :() => import("../views/hobby/Create.vue")
  },
  {
    path : '/hobby/edit/:id',
    name : 'hobby.edit',
    component :() => import("../views/hobby/Edit.vue")
  },
];

const router = createRouter({
  history : createWebHistory(),
  routes
});

export default router;
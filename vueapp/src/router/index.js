import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from '../components/HelloWorld';
import DetalleInfo from '../components/Detalle';

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/detalle/:id',
        name: 'detalle-info',
        component: DetalleInfo
    }
]

const router = new VueRouter({
    mode: "history",
    routes,
});
export default router;



<script setup>
import { ref } from 'vue'

function filter() {
    alert('funcionou')
}

</script>

<template>
    <div class="flex">
        <aside class="fixed left-0 top-0 w-28 h-full bg-grey-800 text-center">
            <h1 class="text-white">teste</h1>
        </aside>
        <main class="flex ml-28">
            <div class="max-w-screen-sm w-auto ml-20 mt-14 p-2 bg-white rounded-lg" id="container">
                <span> svg </span>
                <input class="w-80 size-7 bg-purple p-2" type="text" placeholder="Pesquisa"/>
                <button class="pl-1" @click="filter">filtro</button>
            </div>
        </main>
    </div>  
</template>
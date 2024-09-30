<script setup>

function filter() {
    alert('funcionou')
}

</script>

<template>
    <div class="flex">
        <aside class="fixed left-0 top-0 w-28 h-full bg-gray-800 text-center">
            <h1 class="text-white">teste</h1>
        </aside>
        <main class="flex ml-28">
            <div class="max-w-screen-sm w-auto ml-20 mt-5 p-2 bg-gray-500 rounded-lg" id="container">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 inline mb-1"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg>
                </span>
                <input class="w-80 size-7 p-2 bg-gray-500 outline-none" type="text" placeholder="Pesquisa"/>
                <button class="pl-1" @click="filter">
                    <svg class="size-6 inline mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V6.17157C22 6.96722 21.6839 7.73028 21.1213 8.29289L15.2929 14.1213C15.1054 14.3089 15 14.5632 15 14.8284V17.1716C15 17.9672 14.6839 18.7303 14.1213 19.2929L11.9193 21.4949C10.842 22.5722 9 21.8092 9 20.2857V14.8284C9 14.5632 8.89464 14.3089 8.70711 14.1213L2.87868 8.29289C2.31607 7.73028 2 6.96722 2 6.17157V5Z" fill="#000000"/>
                    </svg>
                </button>
            </div>

            
        </main>
    </div>  
</template>
<script setup>

function filter() {
    alert('funcionou')
}

</script>

<template>
 
        <aside class="fixed w-28 h-screen bg-gray-800 text-center">
            <h1 class="text-white">teste</h1>
        </aside>

        
        <div class=" max-w-fit h-11 ml-28 p-2 bg-gray-500 rounded-lg" id="container">
                <!-- Lupa da barra de pesquisa -->
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 inline mb-1"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg>
                </span>
                <input class=" w-80 size-7 p-2 bg-gray-500 outline-none" type="text" placeholder="Pesquisa"/>
                <!-- Filtro da barra de pesquisa -->
                <button class="pl-1" @click="filter">
                    <svg class="size-6 inline mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V6.17157C22 6.96722 21.6839 7.73028 21.1213 8.29289L15.2929 14.1213C15.1054 14.3089 15 14.5632 15 14.8284V17.1716C15 17.9672 14.6839 18.7303 14.1213 19.2929L11.9193 21.4949C10.842 22.5722 9 21.8092 9 20.2857V14.8284C9 14.5632 8.89464 14.3089 8.70711 14.1213L2.87868 8.29289C2.31607 7.73028 2 6.96722 2 6.17157V5Z" fill="#000000"/>
                    </svg>
                </button>
            </div>

        <main class="flex ml-28">
            <!-- TaskList -->
            <div class=" bg-list-dark w-full h-screen p-10"> <!-- Quadrado cinza de trás -->
                <div class="inline-flex justify-between gap-80 pl-10 font-bold text-lg"> <!-- Quadrado branco com as tarefas -->
                    <p>Tarefas</p> <p>Designado</p> <p>Status</p> <p>Data</p> <p>Notas</p>
                </div>
                <div class="bg-list-light w-fit h-screen m-5" > <!-- Quadrado branco com as tarefas -->
                 <ul>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum, quis repellendus, voluptatum incidunt rerum sequi eaque nam corrupti quod excepturi ipsum sapiente rem, porro fugit veniam dolorum eius aperiam.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolore quia odio inventore est doloribus perferendis. Dolor dolorem ipsa voluptates. Perferendis id quo sit laboriosam quos, nam consequuntur est magni.
                 </ul>
                </div>
            </div>
        </main>
</template>
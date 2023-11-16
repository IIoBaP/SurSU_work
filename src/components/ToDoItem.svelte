<script>
    export let id;
    export let text;
    export let isDone;
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="todo-item" class:todo-item__done={isDone}>
    <input 
        class = "todo-item__check" 
        type="checkbox" 
        on:change={dispatch('change', {id})} 
        checked={isDone}
    />
    <span class = "todo-item__text">{text}</span>
    <button class = "todo-item__btn" on:click={dispatch('remove', {id})}>Del</button>
</div>

<style>
    .todo-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        background: rgb(238, 140, 140);
        border-radius: 10px;
    }
    .todo-item__done{
        background: rgb(175,255,175);
    }
    .todo-item__done .todo-item__text{
        text-decoration: line-through;
    }
    .todo-item__check{
        width: 20px;
        font-size: 20px;
    }
    .todo-item__text{
        flex-grow: 1;
    }
    .todo-item__btn{
        border: none;
        border-radius: 10px;
        background-color: rgb(210, 30, 30);
        padding: 10px;
        min-width: 100px;

    }
</style>
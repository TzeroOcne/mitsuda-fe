<script lang="ts">
  import './app.css';
  import TestRepo from './db/repository/test.repo';
  import type { TestSchema } from './db/schema/test.schema';

  let value = $state('');
  let dataList = $state<TestSchema[]>([]);

  async function insertData() {
    if (!value) {
      throw new Error('Value is required');
    }
    TestRepo.insert({ code: value });
  }

  async function getData() {
    dataList = await TestRepo.select();
  }
</script>

<div class="preview w-full h-full grid grid-cols-2 items-center justify-items-center">
  <div class="card bg-base-100 w-96 shadow-sm border-4 border-white">
    <div class="card-body">
      <label>
        <span class="label">Name</span>
        <input
          bind:value
          type="text"
          class="input bg-base-200 w-full"
        >
      </label>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" onclick={insertData}>Insert</button>
      </div>
    </div>
  </div>
  <div class="card bg-base-100 w-96 shadow-sm border-4 border-white">
    <div class="card-body">
      <h2 class="card-title">Card Title</h2>
      <div class="card-actions justify-end">
        <button onclick={getData} class="btn btn-primary">Reload</button>
      </div>
      <table class="table">
        <tbody>
          {#each dataList as data}
            <tr>
              <td>{data.code}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>

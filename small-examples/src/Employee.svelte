<script>
  let employees = [];
  let message;

  async function getEmployees() {
    const res = await fetch(
      'http://dummy.restapiexample.com/api/v1/employees');
    const json = await res.json();
    if (json.status === 'success') {
      return json.data.sort(
        (e1, e2) => e1.employee_name.localeCompare(e2.employee_name));
    } else {
      throw new Error(json.status);
    }
  }
</script>

{#await getEmployees()}
  <div>Loading employees ...</div>
{:then employees}
  <table>
    <caption>Employees</caption>
    <tr><th>Name</th><th>Age</th></tr>
    {#each employees as employee}
      <tr>
        <td>{employee.employee_name}</td>
        <td>{employee.employee_age}</td>
      </tr>
    {/each}
  </table>
{:catch message}
  <div class="error">Failed to retrieve employees: {message}</div>
{/await}

<style>
  caption {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .error {
    color: red;
  }
  table {
    border-collapse: collapse;
  }
  td, th {
    border: solid lightgray 1px;
    padding: 0.5rem;
  }
</style>
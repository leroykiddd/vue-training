<template>
  <div class="custom__table">
    <div class="table__header">
      <h4 class="field">ID</h4>
      <h4 class="field">firstName</h4>
      <h4 class="field">lastName</h4>
      <h4 class="field">email</h4>
      <h4 class="field">phone</h4>
    </div>
    <div class="table__body">
      <TableRow
        v-for="user in paginatedUsers"
        :key="user.id"
        :userData="user"
      />
    </div>
    <div class="table__pagination">
      <div
        class="page"
        v-for="page in pages"
        :key="page"
        @click="changePage(page)"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import TableRow from "@/components/UI/TableRow";

export default {
  name: "CustomTable",
  components: { TableRow },
  props: {
    usersData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      pageUsersLimit: 10,
      pageNumber: 1,
    };
  },
  methods: {
    changePage(number) {
      this.pageNumber = number;
    },
  },
  computed: {
    pages() {
      return Math.ceil(this.usersData.length / this.pageUsersLimit);
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.pageUsersLimit;
      let to = from + this.pageUsersLimit;
      return this.usersData.slice(from, to);
    },
  },
};
</script>

<style scoped>
.custom__table {
  margin: 0 auto;
}
.table__header {
  display: flex;
}
.table__header h4 {
  width: 20%;
}
.page {
  padding: 10px;
  border: 1px solid black;
  margin-right: 5px;
  margin-top: 5px;
}
.page:hover {
  cursor: pointer;
  background-color: #7cdca5;
}
.table__pagination {
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
}
</style>

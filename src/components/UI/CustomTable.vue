<template>
  <div class="custom__table">
    <div class="table__search">
      <input
        type="text"
        class="field"
        v-model="searchByID"
        placeholder="search By ID"
      />
      <input
        type="text"
        class="field"
        v-model="searchByFirstName"
        placeholder="search by first name"
      />
      <input
        type="text"
        class="field"
        v-model="searchByLastName"
        placeholder="search by last name"
      />
      <input
        type="text"
        class="field"
        v-model="searchByEmail"
        placeholder="search By email"
      />
      <input
        type="text"
        class="field"
        v-model="searchByPhone"
        placeholder="search by phone"
      />
    </div>
    <div class="table__header">
      <h4 class="field" @click="sortAscendingByID">
        ID<span class="material-icons">unfold_more</span>
      </h4>
      <h4 class="field" @click="sortAscendingStrValues('firstName')">
        firstName<span class="material-icons">unfold_more</span>
      </h4>
      <h4 class="field" @click="sortAscendingStrValues('lastName')">
        lastName<span class="material-icons">unfold_more</span>
      </h4>
      <h4 class="field" @click="sortAscendingStrValues('email')">
        email<span class="material-icons">unfold_more</span>
      </h4>
      <h4 class="field" @click="sortAscendingStrValues('phone')">
        phone<span class="material-icons">unfold_more</span>
      </h4>
    </div>
    <div class="table__body">
      <TableRow
        v-for="(user, index) in paginatedUsers"
        :key="index"
        :userData="user"
        @selectUser="showInfo(user)"
      />
      <div>
        <AdditionalInformation v-if="!!selectedUser" :user="selectedUser" />
      </div>
    </div>
    <div class="table__pagination">
      <div
        class="page"
        v-for="page in pages"
        :key="page"
        @click="changePage(page)"
        :class="{ page__selected: page === pageNumber }"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import TableRow from "@/components/UI/TableRow";
import AdditionalInformation from "@/components/UI/AdditionalInformation";

export default {
  name: "CustomTable",
  components: { AdditionalInformation, TableRow },
  props: {
    usersData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      searchedData: {},
      pageUsersLimit: 50,
      pageNumber: 1,
      ascendingSort: 1,
      searchByFirstName: "",
      searchByLastName: "",
      searchByID: "",
      searchByEmail: "",
      searchByPhone: "",
      selectedUser: undefined,
    };
  },
  methods: {
    showInfo(selectedUser) {
      this.selectedUser = selectedUser;
    },
    changePage(number) {
      this.pageNumber = number;
    },
    sortAscendingStrValues(field) {
      this.usersData = this.usersData.sort(
        (firstUser, secondUser) =>
          firstUser[field].localeCompare(secondUser[field]) * this.ascendingSort
      );
      this.ascendingSort *= -1;
    },
    sortAscendingByID() {
      this.usersData = this.usersData.sort(
        (firstUser, secondUser) =>
          (firstUser.id - secondUser.id) * this.ascendingSort
      );
      this.ascendingSort *= -1;
    },
  },
  computed: {
    pages() {
      return Math.ceil(this.searchedUsers.length / this.pageUsersLimit);
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.pageUsersLimit;
      let to = from + this.pageUsersLimit;
      return this.searchedUsers.slice(from, to);
    },
    searchedUsers() {
      return this.usersData.filter((user) => {
        return (
          user.firstName.includes(this.searchByFirstName) &&
          user.lastName.includes(this.searchByLastName) &&
          user.email.includes(this.searchByEmail) &&
          user.phone.includes(this.searchByPhone) &&
          (user.id === Number(this.searchByID) || Number(this.searchByID) === 0)
        );
      });
    },
  },
};
</script>

<style scoped>
h4 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom__table {
  margin: 0 auto;
}
.table__header {
  display: flex;
}
.table__header h4 {
  width: 20%;
}
.table__header h4:hover {
  cursor: pointer;
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
.page__selected {
  background-color: #7cdca5;
}
.table__search {
  display: flex;
}
.table__search input {
  width: 20%;
  margin: 0;
}
</style>

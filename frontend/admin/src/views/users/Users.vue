<template>
  <CRow>
    <CCol col="12" xl="12">
      <CCard>
        <CCardHeader>
          Users
          <CButton @click="showToast">aaa</CButton>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            :active-page="activePage"
            :fields="fields"
            :items="items"
            :items-per-page="5"
            :pagination="{ doubleArrows: false, align: 'center' }"
            clickable-rows
            hover
            striped
            @row-clicked="rowClicked"
            @page-change="pageChange"
          >
            <template #status="data">
              <td>
                <CBadge :color="getBadge(data.item.status)">
                  {{ data.item.status }}
                </CBadge>
              </td>
            </template>
          </CDataTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import usersData from "./UsersData";

export default {
  name: "Users",
  data() {
    return {
      items: usersData,
      fields: [
        { key: "username", label: "Name", _classes: "font-weight-bold" },
        { key: "registered" },
        { key: "role" },
        { key: "status" }
      ],
      activePage: 1
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page);
        }
      }
    }
  },
  methods: {
    showToast() {
      this.$toast();
    },
    getBadge(status) {
      switch (status) {
        case "Active":
          return "success";
        case "Inactive":
          return "secondary";
        case "Pending":
          return "warning";
        case "Banned":
          return "danger";
        default:
          "primary";
      }
    },
    rowClicked(item, index) {
      this.$router.push({ path: `users/${index + 1}` });
    },
    pageChange(val) {
      this.$router.push({ query: { page: val } });
    }
  }
};
</script>

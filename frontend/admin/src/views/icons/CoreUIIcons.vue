<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon :content="$options.freeSet.cilHandPointDown" />
        CoreUI Icons
        <CBadge color="info">New</CBadge>
        <div class="card-header-actions">
          <a
            class="card-header-action"
            href="https://github.com/coreui/coreui-icons"
            rel="noreferrer noopener"
            target="_blank"
          >
            <small class="text-muted">Github</small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody>
        <CRow class="text-center">
          <template v-for="(icon, iconName) in $options.freeSet">
            <CCol :key="iconName" class="mb-5" col="3" sm="2">
              <CIcon :content="icon" :height="42" />
              <div>{{ toKebabCase(iconName) }}</div>
            </CCol>
          </template>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { freeSet } from "@coreui/icons";

export default {
  name: "CoreUIIcons",
  freeSet,
  methods: {
    toKebabCase(str) {
      return str.replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
    }
  }
};
</script>

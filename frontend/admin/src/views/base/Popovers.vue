<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-justify-center" />
        <strong> Bootstrap Popovers</strong>
        <div class="card-header-actions">
          <a
            class="card-header-action"
            href="https://coreui.io/vue/docs/directives/popover"
            rel="noreferrer noopener"
            target="_blank"
          >
            <small class="text-muted">docs</small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol col="6">
            <div class="my-3 text-center">
              <CButton
                v-c-popover="{
                  header: 'Popover header',
                  content: 'I am popover content!'
                }"
                color="primary"
              >
                Click Me
              </CButton>
            </div>
          </CCol>
          <CCol col="6">
            <div class="my-3 text-center">
              <CButton
                v-c-popover="{
                  header: 'Popover!',
                  content: 'I start <strong>open</strong>',
                  active: true
                }"
                color="primary"
              >
                Click me
              </CButton>
            </div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-justify-center" />
        <strong> Popovers </strong>
        <small>placement</small>
      </CCardHeader>
      <CCardBody class="my-3">
        <CRow>
          <CCol
            v-for="placement in placements"
            :key="placement"
            class="py-4 text-center"
            md="4"
          >
            <CButton
              v-c-popover="{
                header: 'Popover!',
                content: `Placement ${placement}`,
                placement
              }"
              color="primary"
            >
              {{ placement }}
            </CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
export default {
  name: "Popovers",
  data() {
    return {
      placements: [
        "top-start",
        "top",
        "top-end",
        "bottom-start",
        "bottom",
        "bottom-end",
        "right-start",
        "right",
        "right-end",
        "left-start",
        "left",
        "left-end"
      ]
    };
  }
};
</script>

export { default as DialogAccept } from '../..\\components\\Dialog\\Accept.vue'
export { default as DialogBannerList } from '../..\\components\\Dialog\\BannerList.vue'
export { default as DialogCancel } from '../..\\components\\Dialog\\Cancel.vue'
export { default as DialogDelete } from '../..\\components\\Dialog\\Delete.vue'
export { default as DialogExcelSheetError } from '../..\\components\\Dialog\\ExcelSheetError.vue'
export { default as DialogProduct } from '../..\\components\\Dialog\\Product.vue'
export { default as DialogReturn } from '../..\\components\\Dialog\\Return.vue'
export { default as DialogReview } from '../..\\components\\Dialog\\Review.vue'
export { default as DialogSubAdmin } from '../..\\components\\Dialog\\SubAdmin.vue'
export { default as DialogSubCategory } from '../..\\components\\Dialog\\SubCategory.vue'
export { default as DialogUploadImage } from '../..\\components\\Dialog\\UploadImage.vue'
export { default as DialogUploadImagePopUp } from '../..\\components\\Dialog\\UploadImagePopUp.vue'
export { default as ChartBar } from '../..\\components\\Chart\\Bar.vue'
export { default as ChartPie } from '../..\\components\\Chart\\Pie.vue'
export { default as CommonFooter } from '../..\\components\\Common\\Footer.vue'
export { default as CommonHeader } from '../..\\components\\Common\\Header.vue'
export { default as CommonPreviewImage } from '../..\\components\\Common\\PreviewImage.vue'
export { default as CommonSideBar } from '../..\\components\\Common\\SideBar.vue'
export { default as CommonStepper } from '../..\\components\\Common\\Stepper.vue'
export { default as EditorMain } from '../..\\components\\Editor\\Main.vue'
export { default as EditorMenuBar } from '../..\\components\\Editor\\MenuBar.vue'
export { default as EditorMenuItem } from '../..\\components\\Editor\\MenuItem.vue'
export { default as FormDefaultLogin } from '../..\\components\\Form\\DefaultLogin.vue'
export { default as FormElementsDateInput } from '../..\\components\\FormElements\\DateInput.vue'
export { default as FormElementsFileInput } from '../..\\components\\FormElements\\FileInput.vue'
export { default as TableCourierDetail } from '../..\\components\\Table\\CourierDetail.vue'
export { default as TableDynamic } from '../..\\components\\Table\\Dynamic.vue'
export { default as TableDynamicServerSide } from '../..\\components\\Table\\DynamicServerSide.vue'
export { default as TableProductView } from '../..\\components\\Table\\ProductView.vue'
export { default as TableTabbedOrderShipping } from '../..\\components\\Table\\TabbedOrderShipping.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

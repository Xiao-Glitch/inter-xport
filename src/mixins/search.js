import { debounce } from 'lodash-es'

export default {
  data () {
    return {
      keywords: '',
      searching: false
    }
  },
  computed: {
    fullList () {
      return this.$store.state.articleltes.artList
    },
    displayList () {
      if (!this.keywords) return this.fullList
      return this.$store.getters['articleltes/searchList'](this.keywords)
    }
  },
  watch: {
    keywords: debounce(function () {
      this.searching = false
    }, 300)
  },
  methods: {
    async ensureData () {
      if (!this.fullList.lenhth) {
        this.searching = true
        await this.$store.displayList
      }
    }
  }
}

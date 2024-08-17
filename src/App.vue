<script>
import { version } from '@/config'
export default {
  globalData: {
    version
  }, 
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style>
/*每个页面公共css */
page {
  background: #f5f5f5;
}
</style>

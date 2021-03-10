import { defineComponent } from "vue"
import './index.scss'
// import imageB from '../../assets/images/20210308-153537(WeLinkPC)1.png'

export default defineComponent({
  name: 'home',
  setup () {
    return () => {
      return (
        <div class="home">
          <h2 class="title">Home working !!!</h2>
          {/* <div class="image-box"></div>
          <p>image: ------</p>
          <img src={imageB} /> */}
          <a href="./about.html">to about</a>
        </div>
      )
    }
  }
})

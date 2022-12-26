import '@google/model-viewer'
import '../App.css'

const Model = () => (
    <div className='card'>
        <model-viewer
          src='public/egx.glb'
          ios-src=''
          poster=''
          alt=''
          shadow-intensity=''
          camera-controls
          auto-rotate
          ar
        ></model-viewer>
    </div>
)

export default Model;
import '@google/model-viewer'
import '../App.css'

const Model = () => (
    <div className='card'>
        <model-viewer
          src='/egx.glb'
          ios-src=''
          poster=''
          alt=''
          shadow-intensity=''
          camera-controls
          auto-rotate
        ></model-viewer>
    </div>
)

export default Model;
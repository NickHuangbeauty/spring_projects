import { Html } from "@react-three/drei"

// Define a Loader component to display a loading animation
const Loader = () => {
  // Wrap the custom loading animation with an Html element
  return (
    <Html>
        {/* Set up a centered container for the loading animation */}
        <div className="flex justify-center items-center">
          {/* Style for the loading animation: 20x20 dimensions, blue border, circular shape, with spinning animation */}
          <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin" />
        </div>
    </Html>
  )
}
 
export default Loader
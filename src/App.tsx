import { Canvas } from "@react-three/fiber";

function App() {
  

  return (
    <div className="w-full h-screen bg-fuchsia-100">
      <Canvas shadows >
        <color attach="background" args={['#444488']}/>
        <fog attach="fog" color="#444488" near={50} far={300} />
      </Canvas>
    </div>
  );
}

export default App;

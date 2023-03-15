import Canvas from "./canvas";
import Resizer from "./resizer";
import Playlist from "./playlist";

export default () => (
    <div className="flex flex-1">
        <Canvas />
        <Resizer />
        <Playlist />
    </div>
);

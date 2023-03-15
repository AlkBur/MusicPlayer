import Button from "./button";

export default () => (
    <div className="flex justify-between cursor-pointer h-[40px] bg-slate-700">
        <div className="flex">
            <Button Icon="faBackward" Title="Previous"></Button>
            <Button Icon="faPlay" Title="Play"></Button>
            <Button Icon="faPause" Title="Pause"></Button>
            <Button Icon="faStop" Title="Stop"></Button>
            <Button Icon="faForward" Title="Next"></Button>
        </div>
        <div className="flex">
            <Button Icon="faList" Title="Playlist"></Button>
            <Button Icon="faExpand" Title="Full screen"></Button>
        </div>
    </div>
);
